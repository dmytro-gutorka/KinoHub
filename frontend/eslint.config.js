import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const aliasResolver = {
  alias: {
    map: [
      ['@app', './src/app'],
      ['@pages', './src/pages'],
      ['@widgets', './src/widgets'],
      ['@features', './src/features'],
      ['@entities', './src/entities'],
      ['@shared', './src/shared'],
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/no-unresolved': 'error',
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
          ],
          pathGroups: [
            { pattern: '@shared/**', group: 'internal' },
            { pattern: '@entities/**', group: 'internal' },
            { pattern: '@features/**', group: 'internal' },
            { pattern: '@widgets/**', group: 'internal' },
            { pattern: '@pages/**', group: 'internal' },
            { pattern: '@app/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        alias: aliasResolver,
      },
    },
  },
  eslintConfigPrettier,
];
