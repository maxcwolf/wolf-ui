// docs/engineering-standards.md 2: components take every color from the theme, so a theme swap
// recolors everything and the contrast audit sees every pairing. A literal color bypasses both.
const HEX = /#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})\b/i;
const FUNCTION = /\b(?:rgba?|hsla?|hwb|lab|lch|oklch|oklab)\(/i;

const isColor = (text) => HEX.test(text) || FUNCTION.test(text);

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: { description: 'Disallow color literals; use a semantic theme color name.' },
    schema: [],
    messages: {
      rawColor:
        'Color literal "{{value}}". Use a theme color name (`bg="surface"`, `color="textMuted"`, or `useTheme().colors.x`). New colors go in theme/colors.ts.',
    },
  },
  create(context) {
    const check = (node, value) => {
      if (typeof value === 'string' && isColor(value)) {
        context.report({ node, messageId: 'rawColor', data: { value } });
      }
    };
    return {
      Literal: (node) => check(node, node.value),
      TemplateElement: (node) => check(node, node.value.cooked),
    };
  },
};
