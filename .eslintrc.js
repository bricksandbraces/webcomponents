module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true
  },
  globals: {
    __CONFIG__: true,
    __ENV__: true
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "react",
    "jsx-a11y",
    "storybook",
    "cypress"
  ],
  extends: [
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:cypress/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json"
  },
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */
        }
      }
    ],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/indent": "off",
    "jsx-a11y/accessible-emoji": "off", // deprecated
    "jsx-a11y/label-has-associated-control": "off", // not working
    "react/require-default-props": "off", // not working
    "jsx-a11y/anchor-is-valid": "off", // not working good
    "react/static-property-placement": ["warn", "static public field"],
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: true,
        allowAnonymousClass: true,
        allowAnonymousFunction: true,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true
      }
    ],
    "no-param-reassign": ["off"],
    "jsx-a11y/no-onchange": "off",
    "react/prop-types": "off",
    radix: ["error", "as-needed"],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "comma-dangle": ["error", "never"]
  }
};
