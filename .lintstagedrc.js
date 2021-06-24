module.exports = {
  '*.{ts,tsx}': [() => 'yarn typecheck'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
  '*.{json,md,mdx,yml,css}': ['prettier --write'],
}
