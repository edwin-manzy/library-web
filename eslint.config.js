import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import eslintImport from 'eslint-plugin-import'
import filesRulesMatch from 'eslint-plugin-filename-rules'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: { react: { version: '18.3' } },
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react': react,
      'import': eslintImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'filename-rules': filesRulesMatch,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "block-spacing": "error",
      "semi": "error",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "eol-last": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "import/no-empty-named-blocks": "error",
      "import/export": "error",
      "import/no-cycle": "error",
      "import/no-relative-packages": "error",
      "import/no-self-import": "error",
      "import/no-useless-path-segments": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "no-trailing-spaces": ["error", { "ignoreComments": true }],
      "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 0 }],
      "react/prefer-stateless-function": "error",
      "react/button-has-type": "error",
      "react/no-unused-prop-types": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-script-url": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/destructuring-assignment": "error",
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-child-element-spacing": "error",
      "react/jsx-curly-brace-presence": "error",
      "react/no-danger-with-children": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/jsx-fragments": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
      "react/jsx-max-depth": ["error", { max: 6 }],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": "warn",
      "react/no-typos": "error",
      "react/display-name": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "error",
      "react/jsx-indent": ["error", 2],
      "react/self-closing-comp": "error",
      "react/sort-prop-types": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "error",
      "react-refresh/only-export-components": "error",
      "filename-rules/match": [2, { ".ts": "kebabcase", ".tsx": "kebabcase" }],
      "import/no-default-export": "error",
      "quotes": [2, "single", { "avoidEscape": true }],
      "indent": ["error", 2]
    },
  },
)
