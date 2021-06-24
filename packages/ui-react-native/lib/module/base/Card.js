import { View } from 'react-native'
import { createRestyleComponent, createVariant } from '@shopify/restyle'
import { cardRestyleFunctions } from '../helpers/restyleFunctions'
export const Card = createRestyleComponent(
  [
    ...cardRestyleFunctions,
    createVariant({
      themeKey: 'cardVariants',
    }),
  ],
  View
)
//# sourceMappingURL=Card.js.map
