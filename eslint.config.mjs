import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig({
  files: ['**/*.{mjs,ts,tsx}'],
  ignores: ['dist/**', 'node_modules/**'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginReactHooks.configs.flat.recommended,
    eslintPluginReactRefresh.configs.vite,
    eslintConfigPrettier,
  ],
  plugins: {
    prettier: eslintPluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': 'off',
  },
});
