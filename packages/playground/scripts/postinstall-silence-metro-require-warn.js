const fs = require('fs')

/**
 * This scripts silences the annoying metro warnings about require cycles that
 * as far as I can tell, are not our fault and cannot be fixed.
 */
const codeToObscure = /console.warn\(\s*(?=["`]Require cycle:)/
const problemFilePath = './node_modules/metro-runtime/src/polyfills/require.js'
const problemFileContent = fs.readFileSync(problemFilePath, 'utf8')

module.exports = fs.writeFileSync(
  problemFilePath,
  problemFileContent.replace(codeToObscure, 'const noConsoleWarn = ('),
  'utf8'
)
