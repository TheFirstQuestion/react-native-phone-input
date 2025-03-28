import { useState, useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import CountryFlag from './CountryFlag';
import dialCodes, { type DialCode } from './assets/dialCodes';

const { width, height } = Dimensions.get('window');

interface CountryPickerProps {
  children?: any;
  visible: boolean;
  onSelect(dialCode: DialCode): void;
  onRequestClose(): void;
}

const CountryPicker = ({
  visible = false,
  onSelect = () => {},
  onRequestClose = () => {},
}: CountryPickerProps) => {
  const pickerHeight = useRef(height - 285).current;
  const showAnimation = useRef(new Animated.Value(0)).current;
  const [_visible, _setVisible] = useState(visible);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (visible) _setVisible(true);
    else {
      Animated.spring(showAnimation, {
        toValue: visible ? 1 : 0,
        stiffness: 1000,
        damping: 500,
        mass: 1.5,
        useNativeDriver: true,
      }).start(() => _setVisible(false));
    }
  }, [visible, showAnimation, _setVisible]);

  useEffect(() => {
    if (_visible) {
      Animated.spring(showAnimation, {
        toValue: visible ? 1 : 0,
        stiffness: 500,
        damping: 100,
        mass: 1.5,
        useNativeDriver: true,
      }).start();
    }
  }, [_visible, showAnimation, visible]);

  const translateY = showAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [pickerHeight, 0],
  });

  return (
    <Modal visible={_visible} transparent>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.overlay,
              {
                opacity: showAnimation,
              },
            ]}
          />
          <TouchableWithoutFeedback onPress={() => {}}>
            <Animated.View
              style={[
                styles.pickerContainer,
                {
                  backgroundColor:
                    colorScheme === 'light' ? '#ffffff' : '#1c1c1e',
                  height: pickerHeight,
                  transform: [{ translateY }],
                },
              ]}
            >
              <FlatList
                data={dialCodes}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
                keyExtractor={(item) => item.countryCode}
                keyboardShouldPersistTaps="always"
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => onSelect(item)}>
                    <View
                      style={[
                        styles.itemContainer,
                        {
                          borderColor:
                            colorScheme === 'light' ? '#eff2f5' : '#29292b',
                        },
                      ]}
                    >
                      <CountryFlag dialCode={item} />
                      <View style={styles.nameContainer}>
                        <Text
                          style={[
                            styles.countryName,
                            {
                              color:
                                colorScheme === 'light' ? '#111111' : '#ffffff',
                            },
                          ]}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View style={styles.dialCodeContainer}>
                        <Text style={styles.dialCodeText}>{item.dialCode}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    height,
    position: 'absolute',
    width,
  },
  pickerContainer: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    bottom: 0,
    overflow: 'hidden',
    paddingTop: 10,
    position: 'absolute',
    width: width,
  },
  flatList: {
    paddingTop: 10,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 48,
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
  },
  nameContainer: {
    marginLeft: 4,
  },
  countryName: {
    // color is dynamically set based on color scheme
  },
  dialCodeContainer: {
    marginLeft: 'auto',
    width: 50,
  },
  dialCodeText: {
    color: '#999999',
    textAlign: 'right',
  },
});

export default CountryPicker;
