
# @mscs/eslint-config

The eslint configuration used in all mscs projects.

# Installation

Install ESLint, this package and peer dependencies locally.

```shell script
$ yarn add eslint @mscs/eslint-config --dev
```

If you are using React in your project also install the React plugin.

```shell script
$ yarn add eslint-plugin-react --dev
```

# Configuration

Use our preset to get reasonable defaults:

```json
{
  "extends": ["@mscs/eslint-config"]
}
```

You can also use the specific configuration for NodeJS, browser or browser with React.

- `"extends": ["@mscs/eslint-config/node"]`
- `"extends": ["@mscs/eslint-config/browser"]`
- `"extends": ["@mscs/eslint-config/browser-react"]`
