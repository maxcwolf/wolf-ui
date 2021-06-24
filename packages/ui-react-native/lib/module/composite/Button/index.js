import { Button as BaseButton } from '../../base/Button'
import { ButtonMain } from './ButtonMain'
import { ButtonInner } from './ButtonInner'
export * from '../../base/Button'
export * from './ButtonInner'
export * from './ButtonMain'
export const Button = Object.assign(BaseButton, {
  Main: ButtonMain,
  Inner: ButtonInner,
})
//# sourceMappingURL=index.js.map
