import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    ignores: [
      '**/*.config.ts',
      'vite.config.ts',
      'eslint.config.js'
    ],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
  },

  {
    files: ['vite.config.ts', '**/*.config.ts'],

    languageOptions: {
      globals: globals.node,
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],
  },
])