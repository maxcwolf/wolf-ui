import { createText } from '@shopify/restyle'
import { Theme } from '../theme'

/**
 * @description The Text component comes with the following Restyle functions:
 *  `color`, `opacity`, `visible`, `typography`, `textShadow`, `spacing`.
 *  It also includes a variant that picks up styles under the `textVariants` theme key.
 */
export const Text = createText<Theme>()
