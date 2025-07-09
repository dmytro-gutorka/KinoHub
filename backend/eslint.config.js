import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nodePlugin from "eslint-plugin-n";
import globals from "globals";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    plugins: {
      n: nodePlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nodePlugin.configs["recommended"].rules,
      "n/no-unsupported-features/es-syntax": "off",
    },
  },
  {
    files: ["eslint.config.js"],
    rules: {
      "n/no-unpublished-import": "off",
    },
  },
  // TypeScript-specific config
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    rules: {
      "no-unused-vars": "off",
    },
  },
]);
