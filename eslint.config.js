import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginSvelte from 'eslint-plugin-svelte';
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { includeIgnoreFile } from '@eslint/compat'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')
const prettierignorePath = path.resolve(__dirname, '.prettierignore')

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,astro}'] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginSvelte.configs['flat/recommended'],
    ...eslintPluginAstro.configs.recommended,
    jsxA11y.flatConfigs.recommended,
    includeIgnoreFile(gitignorePath),
    includeIgnoreFile(prettierignorePath),
]
