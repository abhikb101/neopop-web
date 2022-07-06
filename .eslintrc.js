const fs = require('fs');

const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'prettier',
        'plugin:import/recommended',
        'plugin:storybook/recommended',
    ],
    plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'import'],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: ['./tsconfig.eslint.json'],
    },
    rules: {
        '@typescript-eslint/prefer-optional-chain': 2,
        'jsx-no-lambda': 0,
        semi: [2, 'always'],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'object-shorthand': [0, 'never'],
        quotes: [2, 'single'],
        '@typescript-eslint/no-var-requires': 0,
        'member-ordering': 0,
        'object-literal-sort-keys': 0,
        'no-shadowed-variable': 0,
        'no-consecutive-blank-lines': 0,
        'no-string-literal': 0,
        'jsx-no-multiline-js': 0,
        'jsx-boolean-value': 0,
        'arrow-parens': 0,
        'no-implicit-dependencies': 0,
        'no-submodule-imports': 0,
        'no-case-declarations': 1,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/indent': 0,
        'jsx-alignment': 0,
        'jsx-wrap-multiline': 0,
        'react/jsx-no-useless-fragment': 2,
        '@typescript-eslint/camelcase': 0,
        'prettier/prettier': [2, prettierOptions],
        'arrow-body-style': [2, 'as-needed'],
        'class-methods-use-this': 0,
        'import/order': 0,
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': [
            2,
            {
                caseSensitive: false,
            },
        ],
        // ts already checks case sensitive imports
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        'import/no-cycle': 1,
        'no-param-reassign': 1,
        'max-len': 0,
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 0,
        'no-use-before-define': 0,
        'prefer-template': 2,
        'react/destructuring-assignment': 0,
        'react-hooks/rules-of-hooks': 2,
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-uses-vars': 2,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'require-yield': 0,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                project: './tsconfig.json',
            },
            rollup: {
                config: './rollup.config.js',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/ignore': ['types'], // Weirdly eslint cannot resolve exports in types folder (try removing this later)
    },
};