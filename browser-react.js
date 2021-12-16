/*
 * This file is part of the @mscs/eslint-config package.
 *
 * Copyright (c) 2021 media-service consulting & solutions GmbH
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

module.exports = {
    env: {
        browser: true,
    },
    extends: [
        "plugin:react/recommended",
        "./base",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "react",
    ],
    settings: {
        react: {
            version: "16.12.0",
        },
    },
};
