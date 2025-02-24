module.exports = {
	preset: "react-native",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	transformIgnorePatterns: [
		"node_modules/(?!(react-native|@react-native|@react-native-community|@react-navigation)/)",
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},
	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			babelConfig: true,
		},
	},
	testMatch: ["<rootDir>/__tests__/**/*.test.{ts,tsx,js,jsx}"],
};
