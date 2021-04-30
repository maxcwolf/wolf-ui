import { createBox } from '@shopify/restyle'
import { Theme } from '../../theme/default'

/**
 * @description The Box component comes with the following Restyle functions:
 *  `backgroundColor`, `opacity`, `visible`, `layout`, `spacing`, `border`, `shadow`, `position`.
 */
export const Box = createBox<Theme>()

export const View = Box
