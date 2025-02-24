// Add setImmediate polyfill
global.setImmediate =
	global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0, ...args));

// Set up globals
global.window = {};
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};

// Mock react-native-gesture-handler
jest.mock("react-native-gesture-handler", () => {});

// Set up testing libraries
require("@testing-library/jest-dom");
require("@testing-library/jest-native/extend-expect");

// Mock any other native modules you're using
