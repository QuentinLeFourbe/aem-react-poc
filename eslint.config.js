import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'dist',
      '**/node_modules/',
      'helix-importer-ui/',
      '**/*.min.js',
      'scripts/**',
      'blocks/**',
      'libs/vendor/**',
    ],
  },
  // AEM JS Configuration
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      // Using default parser (Espree) instead of babel-parser for ESLint v10 compatibility
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'import/extensions': ['error', 'always'],
      'no-param-reassign': ['error', { props: false }],
      'import/no-unresolved': 'off', // Rely on TS/Bundler for resolution
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['libs/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
    },
  },
  // Prettier must be last to override other configs
  eslintConfigPrettier,
];
