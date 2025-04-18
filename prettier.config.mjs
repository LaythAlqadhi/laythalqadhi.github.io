/** @type {import('prettier').Config} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  tailwindStylesheet: "./src/styles/globals.css",
  tailwindFunctions: ["tv"],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^(astro/(.*)$)|^(astro$)",
    "<THIRD_PARTY_MODULES>",
    "^@tabler/icons(.*)$",
    "",
    ".css$",
    "",
    "<TYPES>^(node:)",
    "<TYPES>",
    "<TYPES>^[.]",
    "/types(.*)$",
    "",
    "/(_data|data)/(.*)$",
    "",
    "/(_schemas|schemas)/(.*)$",
    "",
    "/constants/(.*)$",
    "/configs/(.*)$",
    "/lib/(.*)$",
    "",
    "/(_hooks|hooks)/(.*)$",
    "/(_contexts|contexts)/(.*)$",
    "/(_providers|providers)/(.*)$",
    "^@/components/ui/(.*)$",
    "/(_components|components)/(.*)$",
    "[.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: true,
}

export default config
