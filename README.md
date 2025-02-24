# React Native Phone Input

International phone number input for React Native with country picker supporting 235 countries. Uses [ruimarinho/google-libphonenumber](https://github.com/ruimarinho/google-libphonenumber) to validate input and automatically translates to valid e164 format.

This repo is a fork of [@sesamsolutions/phone-input](https://github.com/sesamsolutions/react-native-phone-input). Notable changes:

- Added autofill support for iOS and Android
- Phone number is formatted as you type
- Added support for `testID` prop for automated testing (e.g. with Jest)
- Added support for `textInputProps` prop to pass any additional props to the underlying `TextInput` component


## Installation

```
npm install thefirstquestion/react-native-phone-input
```

## Usage

```jsx
import PhoneInput from "@thefirstquestion/react-native-phone-input";
```

### Example

```jsx
import React from 'react'
import { Alert, View } from 'react-native'
import import PhoneInput from "@thefirstquestion/react-native-phone-input";

const App = () => {

    const handleChange = (data) => {
        if (data.isValid) {
            Alert.alert(data.e164)
        } else {
            console.log(data.input + ' is not a valid phone number')
        }
    }

    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <PhoneInput
                initialCountry="US"
                onChange={handleChange} />
        </View>
    )
    
}

export default App
```

## Props

#### `initialCountry`

Set the initial country and dial code. Defaults to `US`.

---

#### `onChange`

Returns an object containing information about the Phone number every time the input or `value` changes.

* `countryCode`: currently selected country code. `null` if not selected.
* `dialCode`: current dial code. `null` if not selected.
* `e164`: e164 valid phone number. `null` if invalid.
* `input`: raw phone number input. Same as `onChangePhoneNumber`.
* `isValid`: `boolean` indicating if input is a valid phone number.



#### `onChangePhoneNumber`

Returns current raw input `string`. Use `onChange` instead to benefit from additional validations.

---

#### `value`

Changes the current input. Be careful not to update this with `onChange`. This will cause an endless loop.

---

#### ~~`allowCustomDialCode`~~

~~`boolean` indicating whether custom dial code input should be allowed or not. When set to false you can only select dial codes from the country picker. Defaults to `true`.~~

---

#### `dismissKeyboard`

Hide the keyboard automatically when the input is considered valid e164 format. Defaults to `true`.

---

#### `style`

Customize the phone number input.

---

#### `textStyle`

Customize text inside the phone number input.

---

#### `autoFocus`

Boolean indicating if the input should be focused when the component is mounted. Defaults to `false`.

---

#### `testID`

Used to locate the phone number input for testing purposes.

---

#### `onFocus`

Called when the input is focused.

---

#### `onBlur`

Called when the input is blurred, i.e. when the input loses focus.

---

#### `textInputProps`

Pass any additional props to the underlying `TextInput` component.

