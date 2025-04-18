import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

import { includeIgnoreFile } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginAstro from "eslint-plugin-astro"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const gitignorePath = resolve(__dirname, ".gitignore")

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  ...eslintPluginAstro.configs["flat/recommended"],
]

export default eslintConfig
