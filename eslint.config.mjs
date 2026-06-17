import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import promisePlugin from "eslint-plugin-promise";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      import: importPlugin,
      promise: promisePlugin,
      sonarjs,
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      eqeqeq: "off",
      curly: "off",
      "prefer-const": "off",
      "no-var": "off",
      "no-shadow": "off",
      "no-use-before-define": "off",

      "import/no-unresolved": "off",
      "import/order": "off",

      "promise/catch-or-return": "off",
      "promise/no-return-wrap": "off",

      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-identical-functions": "off",
      "sonarjs/cognitive-complexity": ["off", 15],
    },
  },
];