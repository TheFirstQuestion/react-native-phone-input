module.exports = {
	preset: "react-native",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	transformIgnorePatterns: [
		"node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-community)/)",
	],
	setupFiles: [
		"<rootDir>/jest.setup.js",
		"./node_modules/react-native-gesture-handler/jestSetup.js",
	],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
	globals: {
		"ts-jest": {
			babelConfig: true,
		},
	},
};
