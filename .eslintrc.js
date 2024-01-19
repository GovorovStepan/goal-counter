module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'google',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    // my customs
    'no-unused-vars': 'warn',
    // 'no-console': ['warn', { allow: ['error'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'one-var': 'off',
    'require-jsdoc': 'off',
    'prefer-template': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'prefer-destructuring': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'dot-notation': 'off',
    'react/no-array-index-key': 'off',
    camelcase: 'off',
    'react/no-unescaped-entities': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'off',
    //
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
}
