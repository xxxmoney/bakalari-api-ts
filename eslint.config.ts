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
        languageOptions: { globals: { ...globals.browser, ...globals.jest } },
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

            // Limits consecutive blank lines to 1
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],

            // Requires blank lines between class members
            'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],

            // Enforces consistent blank lines before/after specific statements
            'padding-line-between-statements': [
                'error',
                // Always require a blank line before 'return' statements
                { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
                // Always require a blank line before exported statements
                { 'blankLine': 'always', 'prev': '*', 'next': ['export', 'block-like'] },
                // Ensure blank lines separate declaration groups from other code
                { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
                // BUT prevent blank lines between const/let/var declarations
                { 'blankLine': 'never', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] }
            ],
        }
    }
]);
