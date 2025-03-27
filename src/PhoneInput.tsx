import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import CountryFlag from './CountryFlag';
import CountryPicker from './CountryPicker';
import dialCodes from './assets/dialCodes';
import type { DialCode } from './assets/dialCodes';
import { findDialCode, normalize } from './utils';
import {
  PhoneNumberFormat,
  PhoneNumberUtil,
  AsYouTypeFormatter,
} from 'google-libphonenumber';

const PNF = PhoneNumberFormat;
const phoneUtil = PhoneNumberUtil.getInstance();

export interface PhoneInputProps {
  ref?: any;
  children?: any;
  initialCountry?: string;
  value?: string;
  style?: object;
  textStyle?: object;
  dismissKeyboard?: boolean;
  autoFocus?: boolean;
  testID?: string;
  textInputProps?: object;
  onChange?(data: PhoneInputChangeEvent): void;
  onChangePhoneNumber?(phoneNumber: string): void;
  onFocus?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
  onBlur?(event: NativeSyntheticEvent<TextInputFocusEventData>): void;
}

export interface PhoneInputChangeEvent {
  input: string;
  dialCode: string | null;
  countryCode: string | null;
  isValid: boolean;
  e164: string | null;
}

const PhoneInput = forwardRef<any, PhoneInputProps>((props, ref) => {
  const {
    initialCountry = 'US',
    value,
    style = {},
    textStyle = {},
    dismissKeyboard = true,
    autoFocus = false,
    testID,
    onChange = () => {},
    onChangePhoneNumber = () => {},
    onFocus,
    onBlur,
    textInputProps,
  } = props;

  const initialDialCode = useMemo(
    () =>
      dialCodes.find(
        (dc) =>
          initialCountry && dc.countryCode === initialCountry.toUpperCase()
      ),
    [initialCountry]
  );
  const [dialCode, setDialCode] = useState<DialCode | undefined>(
    initialDialCode
  );
  const [phoneNumber, setPhoneNumber] = useState(
    initialDialCode?.dialCode ?? ''
  );
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [formatter, setFormatter] = useState(
    () => new AsYouTypeFormatter(initialCountry)
  );

  const isValidNumber = useCallback(
    (number: string, country: string): boolean => {
      const obj = phoneUtil.parse(number, country);
      return phoneUtil.isValidNumber(obj);
    },
    []
  );

  const emitChange = useCallback(
    (number: string, dc?: DialCode) => {
      if (onChange) {
        const event: PhoneInputChangeEvent = {
          input: number,
          dialCode: null,
          countryCode: null,
          isValid: false,
          e164: null,
        };
        if (dc) {
          event.dialCode = dc.dialCode;
          event.countryCode = dc.countryCode;
          let obj;
          try {
            obj = phoneUtil.parse(number, dc.countryCode);
          } catch {}
          if (obj) {
            event.isValid = obj ? isValidNumber(number, dc.countryCode) : false;
            event.e164 = event.isValid ? phoneUtil.format(obj, PNF.E164) : null;
          }
        }
        if (event.isValid && dismissKeyboard) Keyboard.dismiss();
        onChange(event);
      }
    },
    [onChange, dismissKeyboard, isValidNumber]
  );

  const handleChangeText = useCallback(
    (input: string) => {
      input = normalize(input);
      let dc = findDialCode(input);
      if (!dc && !input.startsWith('+') && !input.startsWith('00')) {
        dc = initialDialCode;
        if (dc && input.length >= 2) {
          input = dc.dialCode + input.replace(/^0+/, '');
        }
      }
      setDialCode(dc);

      // Reset formatter and format from scratch
      formatter.clear();
      let formattedNumber = '';
      // Get raw digits, excluding the dial code
      const rawInput = dc
        ? input.replace(dc.dialCode, '').replace(/\D/g, '')
        : input.replace(/\D/g, '');

      for (let i = 0; i < rawInput.length; i++) {
        formattedNumber = formatter.inputDigit(rawInput[i] ?? '');
      }

      // If we have a dial code, make sure it's at the start of the formatted number
      if (dc && !formattedNumber.startsWith(dc.dialCode)) {
        formattedNumber = dc.dialCode + ' ' + formattedNumber;
      }

      setPhoneNumber(formattedNumber);

      const number = dc
        ? dc.dialCode + input.split(dc.dialCode).join('')
        : input;
      if (onChangePhoneNumber) onChangePhoneNumber(number);
      emitChange(number, dc);
    },
    [onChangePhoneNumber, emitChange, formatter, initialDialCode]
  );

  const openCountryPicker = useCallback(() => {
    Keyboard.dismiss();
    setCountryPickerVisible(true);
  }, []);

  const handleSelect = useCallback(
    (newDialCode: DialCode) => {
      let number = phoneNumber;
      if (dialCode) number = number.split(dialCode.dialCode).join('');
      setDialCode(newDialCode);
      handleChangeText(newDialCode.dialCode + number);
      setCountryPickerVisible(false);
    },
    [phoneNumber, handleChangeText, dialCode]
  );

  useEffect(() => {
    if (value && value.length) {
      handleChangeText(value);
    }
  }, [value, handleChangeText]);

  useEffect(() => {
    if (dialCode) {
      setFormatter(new AsYouTypeFormatter(dialCode.countryCode));
    }
  }, [dialCode]);

  return (
    <>
      <View
        ref={ref as any}
        style={[styles.container, style]}
        testID={`${testID}-container`}
      >
        <TouchableOpacity
          style={styles.flagContainer}
          onPress={openCountryPicker}
          testID={`${testID}-flag-button`}
        >
          <CountryFlag dialCode={dialCode} />
        </TouchableOpacity>

        <TextInput
          testID={`${testID}-input`}
          dataDetectorTypes={['phoneNumber']}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={handleChangeText}
          autoFocus={autoFocus}
          value={phoneNumber}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[styles.input, textStyle]}
          {...textInputProps}
        />
      </View>

      <CountryPicker
        visible={countryPickerVisible}
        onSelect={handleSelect}
        onRequestClose={() => setCountryPickerVisible(false)}
      />
    </>
  );
});

PhoneInput.displayName = 'PhoneInput';

const styles = StyleSheet.create({
  container: {
    borderColor: '#eeeeee',
    flexDirection: 'row',
  },
  flagContainer: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 0,
    flexGrow: 1,
    height: 40,
    paddingLeft: 0,
  },
});

export default PhoneInput;
