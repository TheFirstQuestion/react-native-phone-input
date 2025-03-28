import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from '@testing-library/react-native';
import PhoneInput from '../PhoneInput';

// Mock Settings module
jest.mock('react-native/Libraries/Settings/Settings', () => ({
  get: jest.fn(),
  set: jest.fn(),
  watchKeys: jest.fn(),
  clearWatch: jest.fn(),
}));

// Mock React Native components and native modules
jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  return {
    ...rn,
    View: 'View',
    TextInput: 'TextInput',
    TouchableOpacity: 'TouchableOpacity',
    Keyboard: {
      dismiss: jest.fn(),
    },
    NativeModules: {
      ...rn.NativeModules,
      SettingsManager: {
        settings: {
          AppleLocale: 'en_US',
          AppleLanguages: ['en'],
          AndroidLocale: 'en_US',
        },
      },
      StatusBarManager: {
        getHeight: jest.fn(),
      },
      PlatformConstants: {
        getConstants: () => ({
          isTesting: true,
          reactNativeVersion: {
            major: 0,
            minor: 0,
            patch: 0,
          },
        }),
      },
      DevSettings: {
        addMenuItem: jest.fn(),
        reload: jest.fn(),
        addListener: jest.fn(),
        removeListeners: jest.fn(),
      },
    },
    Platform: {
      ...rn.Platform,
      OS: 'ios',
      select: jest.fn((obj) => obj.ios),
    },
    useColorScheme: () => 'light',
  };
});

// Mock scheduler for React concurrent mode
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

describe('PhoneInput', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  // Basic rendering tests
  it('renders correctly with default props', () => {
    render(<PhoneInput testID="phone-input" />);
    expect(screen.getByTestId('phone-input-container')).toBeTruthy();
    expect(screen.getByTestId('phone-input-input')).toBeTruthy();
    expect(screen.getByTestId('phone-input-flag-button')).toBeTruthy();
  });

  it('renders without flag picker when disabled', () => {
    render(<PhoneInput testID="phone-input" disableFlagPicker />);
    expect(screen.queryByTestId('phone-input-flag-button')).toBeNull();
  });

  // Input handling tests
  it('handles phone number input correctly', async () => {
    const onChange = jest.fn();
    const onChangePhoneNumber = jest.fn();

    render(
      <PhoneInput
        testID="phone-input"
        onChange={onChange}
        onChangePhoneNumber={onChangePhoneNumber}
      />
    );

    const input = screen.getByTestId('phone-input-input');
    fireEvent.changeText(input, '2345678901');

    expect(onChangePhoneNumber).toHaveBeenCalledWith('+12345678901');
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        input: '+12345678901',
        dialCode: '+1',
        countryCode: 'US',
        isValid: true,
        e164: '+12345678901',
      })
    );
  });

  it('handles initial country prop correctly', () => {
    render(<PhoneInput testID="phone-input" initialCountry="GB" />);
    const input = screen.getByTestId('phone-input-input');
    expect(input.props.value).toBe('+44');
  });

  // Country picker interaction tests
  it('opens country picker on flag button press', () => {
    render(<PhoneInput testID="phone-input" />);
    const flagButton = screen.getByTestId('phone-input-flag-button');

    act(() => {
      fireEvent.press(flagButton);
    });

    // Verify that the country picker modal is visible
    expect(screen.getByText('Egypt')).toBeTruthy();
    expect(screen.getByText('Canada')).toBeTruthy();
  });

  it('changes country code when new country is selected', () => {
    const onChange = jest.fn();
    render(<PhoneInput testID="phone-input" onChange={onChange} />);

    const flagButton = screen.getByTestId('phone-input-flag-button');
    act(() => {
      fireEvent.press(flagButton);
    });

    const ukOption = screen.getByText('Egypt');
    act(() => {
      fireEvent.press(ukOption);
    });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        dialCode: '+20',
        countryCode: 'EG',
      })
    );
  });

  // Edge cases and validation tests
  it('handles invalid phone numbers correctly', () => {
    const onChange = jest.fn();
    render(<PhoneInput testID="phone-input" onChange={onChange} />);

    const input = screen.getByTestId('phone-input-input');
    fireEvent.changeText(input, '123');

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        isValid: false,
        e164: null,
      })
    );
  });

  it('handles keyboard dismissal correctly', async () => {
    const { Keyboard } = require('react-native');
    render(<PhoneInput testID="phone-input" dismissKeyboard={true} />);

    const input = screen.getByTestId('phone-input-input');
    fireEvent.changeText(input, '2345678901');

    expect(Keyboard.dismiss).toHaveBeenCalled();
  });

  // Focus and blur event tests
  it('handles focus and blur events', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <PhoneInput testID="phone-input" onFocus={onFocus} onBlur={onBlur} />
    );

    const input = screen.getByTestId('phone-input-input');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  // Style prop tests
  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    const customTextStyle = { color: 'blue' };

    render(
      <PhoneInput
        testID="phone-input"
        style={customStyle}
        textStyle={customTextStyle}
      />
    );

    const container = screen.getByTestId('phone-input-container');
    const input = screen.getByTestId('phone-input-input');

    expect(container.props.style).toContainEqual(customStyle);
    expect(input.props.style).toContainEqual(customTextStyle);
  });
});
