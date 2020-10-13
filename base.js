/*
 * This file is part of the @mscs/eslint-config package.
 *
 * Copyright (c) 2020 media-service consulting & solutions GmbH
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

module.exports = {
    env: {
        commonjs: true,
        es6: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    },
    plugins: [
        "simple-import-sort",
        "@typescript-eslint",
    ],
    ignorePatterns: ["node_modules/", "dist/"],
    rules: {
        "no-dupe-class-members": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
            },
        ],
        "sort-imports": "off",
        "simple-import-sort/sort": [
            "error",
            {
                // The default grouping, but with no blank lines.
                groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]],
            },
        ],
        "no-duplicate-imports": "error",
        "generator-star-spacing": [
            "error",
            "after",
        ],
        "no-await-in-loop": "error",
        complexity: "warn",
        curly: "error",
        eqeqeq: "error",
        "no-alert": "warn",
        "no-else-return": "error",
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-magic-numbers": [
            "warn",
            {
                ignore: [-1, 0, 1],
                ignoreArrayIndexes: true,
                enforceConst: true,
            },
        ],
        "no-multi-spaces": "error",
        "no-new-func": "error",
        "no-return-assign": [
            "error",
            "always",
        ],
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "warn",
        "no-useless-return": "error",
        "prefer-promise-reject-errors": "error",
        "no-undefined": "error",
        "no-undef-init": "error",
        "no-buffer-constructor": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "warn",
        "block-spacing": "error",
        "brace-style": "error",
        camelcase: "error",
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "comma-spacing": "error",
        "consistent-this": [
            "error",
        ],
        "eol-last": "error",
        "func-call-spacing": "error",
        // eslint-disable-next-line no-magic-numbers
        "@typescript-eslint/indent": ["error", 4],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "lines-between-class-members": "error",
        "max-params": "warn",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "no-nested-ternary": "error",
        "no-trailing-spaces": "error",
        "padded-blocks": ["error", { "classes": "always" }],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        ],
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "prefer-exponentiation-operator": "error",
        quotes: "error",
        semi: "error",
        "semi-style": "error",
        "spaced-comment": "error",
        "no-confusing-arrow": "error",
        "prefer-const": "error",
        "prefer-destructuring": "warn",
        "prefer-rest-params": "error",
        "yield-star-spacing": "error",
        "array-callback-return": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
    },
    overrides: [
        {
            files: ["*.test.ts"],
            rules: {
                "no-undefined": "off",
                "no-magic-numbers": "off",
            },
        },
    ],
};
