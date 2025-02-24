// Add setImmediate polyfill
global.setImmediate =
	global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0, ...args));

import "@testing-library/jest-native";
import "react-native-gesture-handler/jestSetup";
import "jest-expect-message";
