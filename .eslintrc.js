module.exports = {
	root: true,
	extends: [
		'@react-native',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:@tanstack/query/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				singleQuote: true,
				trailingComma: 'all',
			},
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'no-console': 'warn',
		'no-unused-vars': 'warn',
		'prefer-const': 'warn',
		'no-warning-comments': 'off',
		'spaced-comment': 'off',
		'@tanstack/query/exhaustive-deps': 'error',
	},
	globals: {
		jest: true,
	},
};
