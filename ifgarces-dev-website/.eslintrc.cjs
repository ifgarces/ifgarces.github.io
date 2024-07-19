/* eslint-disable no-undef */
module.exports = {
  root:    true,
  env:     { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns:  ["dist", "node_modules", "/**/*.html"],
  "parser":        "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 14,
    "sourceType":  "module"
  },
  plugins: [
    "react",
    "react-refresh",
    "require-explicit-generics"
  ],
  rules: {
    // Basic styling rules
    "react/jsx-indent":               ["error", 2],
    "react/jsx-indent-props":         ["error", 2],
    "react/jsx-closing-tag-location": "error",
    "react/no-unescaped-entities":    "off",
    "indent":                         ["error", 2, { "ignoredNodes": ["JSXAttribute"] }],
    "semi":                           "error",
    "camelcase":                      ["error", { "properties": "always", "ignoreGlobals": true }],
    "no-extra-semi":                  "error",
    "quotes":                         ["error", "double", { "avoidEscape": true }],
    "no-duplicate-imports":           "error",
    "no-multiple-empty-lines":        [
      "error", { "max": 2, "maxBOF": 0, "maxEOF": 1 }
    ],
    "eol-last": ["error", "always"],

    // Other styling rules
    "key-spacing":             ["error", { "align": "value", "beforeColon": false }],
    "func-style":              ["error", "declaration", { "allowArrowFunctions": true }],
    "react/jsx-curly-spacing": [
      "error", { "when": "never", "children": { "when": "never" } }
    ],

    // Other spacing rules
    "no-trailing-spaces":   "error",
    "no-multi-spaces":      "error",
    "block-spacing":        ["error", "always"],
    "space-before-blocks":  ["error", "always"],
    "keyword-spacing":      ["error", { "before": true, "after": true }],
    "space-infix-ops":      ["error"],
    "brace-style":          "error",
    "comma-spacing":        ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing":        ["error", { "before": true, "after": true }],
    "comma-dangle":         ["error", "never"],

    // Linting
    "no-redeclare":   "error",
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "_", varsIgnorePattern: "_", caughtErrorsIgnorePattern: "_" }
    ],
    "no-undef":   "error",
    "no-shadow":  "error",
    "no-console": ["error", { "allow": ["warn", "error"] }]
  }
};
