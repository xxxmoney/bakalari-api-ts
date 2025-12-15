import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    // Predefined rules
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    // Config and rules
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
        rules: {
            // Single quotes (using the base 'quotes' rule)
            'quotes': ['error', 'single', { 'avoidEscape': true }],

            // Semicolons (using the base 'semi' rule)
            'semi': ['error', 'always'],

            // 4-space indentation (using the base 'indent' rule)
            'indent': ['error', 4, { 'SwitchCase': 1 }],

            // Spacing around keywords and commas, and inside object literals
            'keyword-spacing': 'error',

            // Spaces after commas
            'comma-spacing': 'error',

            // Spaces inside curly braces of object
            'object-curly-spacing': ['error', 'always'],
        }
    }
]);
