module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: false,
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],

        alias: {
          '@': './',
          'tailwind.config': './tailwind.config.js',
        },
      },
    ],
  ],
};
