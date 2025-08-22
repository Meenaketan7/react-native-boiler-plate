const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const {
	resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = mergeConfig(defaultConfig, {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
	resolver: {
		assetExts: assetExts.filter(ext => ext !== 'svg'),
		sourceExts: [...sourceExts, 'svg', 'js', 'json', 'ts', 'tsx'],
	},
});

const nativeWindConfig = withNativeWind(config, {
	input: './global.css',
});

module.exports = mergeConfig(defaultConfig, nativeWindConfig);
