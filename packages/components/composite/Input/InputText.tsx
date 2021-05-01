import React, { forwardRef, ReactNode } from 'react'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@wolf-ui/theme'
import { Box, Flex, Text, TextInput, TextInputProps } from '../../base'
import { HAIRLINE_WIDTH } from '../../helpers/constants'

const InputRequired = () => (
  <Text color="inputRequired" pt="s">
    *{' '}
  </Text>
)

export interface InputItemProps
  extends Omit<
    TextInputProps,
    'placeholderTextColor' | 'onChange' | 'onChangeText'
  > {
  label?: ReactNode
  inputType?: 'input' // TODO: Add password `| 'password'`
  bottomContent?: ReactNode
  value: string
  onChangeText: (value: string) => void
  required?: boolean
  colon?: boolean
  onClear?: () => void
}

// TODO: Keep forwardRef if decide to allow for this to be uncontrolled and keep input value
// state if uncontrolled... probably should have the option to use this controlled or not.
/**
export const InputText = forwardRef<typeof TextInput, InputItemProps>(
  (
    {
      label,
      bottomContent,
      value,
      onChangeText,
      onClear,
      required = false,
      style,
      colon = false,
      ...restProps
    },
    ref,
  ) => {
    const theme = useTheme<Theme>()

    const Label = () =>
      label && typeof label === 'string' ? (
        <Flex marginHorizontal="s">
          {required && <InputRequired />}
          <Text variant="normal">{label}</Text>
          {colon && <Text> :</Text>}
        </Flex>
      ) : (
        <Flex marginHorizontal="s">
          {required && <InputRequired />}
          {label}
          {colon && <Text> :</Text>}
        </Flex>
      )

    return (
      <Flex
        flexDirection="row"
        borderBottomWidth={HAIRLINE_WIDTH}
        borderColor="inputBorder"
        borderRadius="base"
      >
        <Label />
        <Flex flexDirection="row" flex={1}>
          <Box flexGrow={1}>
            <TextInput
              ref={ref}
              pl="xs"
              {...restProps}
              style={[
                style,
                {
                  height: 40, // TODO: Use Theme
                  fontSize: 16, // TODO: Use Theme
                },
              ]}
              placeholderTextColor={theme.colors.inputPlaceholder}
              value={value}
              onChangeText={onChangeText}
              // secureTextEntry={} TODO: Add password option for TextInput
            />
          </Box>
        </Flex>
        {bottomContent && (
          <Box marginRight="m">
            {typeof bottomContent === 'string' ? (
              <Text>{bottomContent}</Text>
            ) : (
              bottomContent
            )}
          </Box>
        )}
      </Flex>
    )
  },
)
 */

export const InputText = () => (
  <Box>
    <Text>Delete Me!</Text>
  </Box>
)
