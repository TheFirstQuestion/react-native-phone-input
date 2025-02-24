module.exports = {
	presets: [
		"module:metro-react-native-babel-preset",
		"@babel/preset-typescript",
	],
	env: {
		test: {
			plugins: ["@babel/plugin-transform-runtime"],
		},
	},
};
