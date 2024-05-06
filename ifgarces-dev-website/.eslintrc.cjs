module.exports = { // eslint-disable-line no-undef
  root:     true,
  env:      { browser: true },
  settings: {
    react: { version: "detect" }
  },
  parserOptions: {
    ecmaVersion:  2021,
    sourceType:   "module",
    ecmaFeatures: { jsx: true }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["node_modules", "/**/*.html", "build"],
  plugins:        [
    "react",
    "react-refresh",
    "require-explicit-generics"
  ],
  rules: {
    // Styling
    "indent":  ["error", 2, { "ignoredNodes": ["JSXAttribute"] }],
    "quotes":  ["error", "double", { "avoidEscape": true }],
    "semi": ["error", "always"],
    "camelcase":             ["error", { "properties": "always", "ignoreGlobals": true }],
    "react/jsx-pascal-case": "error",
    "max-len": [
      "warn", 100, { "ignoreComments": false, "ignoreTrailingComments": true, "ignoreUrls": true }
    ],
    "eol-last":             ["error", "always"],
    "no-trailing-spaces":   "error",
    "no-multi-spaces":      "error",
    "comma-spacing":        ["error", { "before": false, "after": true }],
    "comma-dangle":         ["error", "never"],

    "func-style":             ["error", "declaration", { "allowArrowFunctions": false }],
    "function-paren-newline": ["error", "consistent"],

    "react/jsx-curly-spacing": [
      "error", { "when": "never", "children": { "when": "never" } }
    ],
    "react/jsx-indent":               ["error", 2],
    "react/jsx-indent-props":         ["error", 2],
    "react/jsx-closing-tag-location": "error",

    // Linting
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-duplicate-imports":   "error",
    "no-redeclare":           "error",
    "no-undef":               "error",
    "no-unused-vars":         [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "React", caughtErrorsIgnorePattern: "^_" }
    ],
    "no-useless-escape": 0,
    "no-shadow": "error",
    "no-nested-ternary":   "error",
    "no-unneeded-ternary": "error"
  }
  // "overrides": [
  //   {
  //     "files": ["**/*.jsx"],
  //     "rules": {
  //       "react/react-in-jsx-scope": "off"
  //     }
  //   }
  // ]
};
