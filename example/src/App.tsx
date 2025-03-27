import PhoneInput from '../../src/PhoneInput';
import type { PhoneInputChangeEvent } from '../../src/PhoneInput';
import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState<PhoneInputChangeEvent>(
    {} as PhoneInputChangeEvent
  );

  const handleChange = (rawData: PhoneInputChangeEvent) => {
    setData(rawData);
  };

  return (
    <View style={styles.container}>
      <PhoneInput style={styles.phoneInput} onChange={handleChange} />

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Country Code:</Text>
          <Text style={styles.cell}>{data.countryCode || 'Not selected'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Dial Code:</Text>
          <Text style={styles.cell}>{data.dialCode || 'Not selected'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>E164:</Text>
          <Text style={styles.cell}>{data.e164 || 'Invalid'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Input:</Text>
          <Text style={styles.cell}>{data.input || 'Empty'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Is Valid:</Text>
          <Text style={styles.cell}>{data.isValid ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  phoneInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 2,
  },
  table: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
