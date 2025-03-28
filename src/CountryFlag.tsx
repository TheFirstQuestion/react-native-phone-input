import { Image, View, StyleSheet } from 'react-native';
import { type DialCode } from './assets/dialCodes';

interface CountryFlagProps {
  children?: any;
  dialCode?: DialCode;
}

const CountryFlag = (props: CountryFlagProps) => (
  <View style={styles.container}>
    {props.dialCode && props.dialCode.icon && (
      <Image style={styles.flagImage} source={props.dialCode.icon} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginRight: 12,
    width: 28,
  },
  flagImage: {
    aspectRatio: 1,
    height: undefined,
    width: 28,
  },
});

export default CountryFlag;
