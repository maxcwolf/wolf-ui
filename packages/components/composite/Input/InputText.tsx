import React, { forwardRef, useState, useEffect, ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@wolf-ui/theme'
import { Box, Flex, Text, TextInput, TextInputProps } from '../../base'
import { Icon } from '../'
import { HAIRLINE_WIDTH } from '../../helpers/constants'

const InputRequired = () => (
  <Text color="inputRequired" pt="s">
    *{' '}
  </Text>
)

export interface InputTextProps
  extends Omit<
    TextInputProps,
    'placeholderTextColor' | 'onChange' | 'onChangeText'
  > {
  label?: ReactNode
  isPassword?: boolean // TODO: Add password `| 'password'`
  bottomContent?: ReactNode
  value?: string
  onChangeText?: (value: string) => void
  isRequired?: boolean
  onClear?: () => void
}

// TODO: Keep forwardRef if decide to allow for this to be uncontrolled and keep input value
// state if uncontrolled... probably should have the option to use this controlled or not.

export const InputText = forwardRef<typeof TextInput, InputTextProps>(
  (
    {
      label,
      bottomContent,
      value,
      onChangeText,
      onClear,
      isRequired = false,
      isPassword = false,
      style,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme<Theme>()
    const [inputValue, setInputValue] = useState(value)
    const [isEyeOpen, setIsEyeOpen] = useState(isPassword)

    useEffect(() => {
      setInputValue(value)
    }, [value])

    const handleChange = (val: string) => {
      setInputValue(val)
      onChangeText?.(val)
    }

    const Label = () => (
      <Flex flexDirection="row" marginHorizontal="s">
        {isRequired && <InputRequired />}
        {typeof label === 'string' ? (
          <Text variant="normal">{label}</Text>
        ) : (
          label
        )}
      </Flex>
    )

    return (
      <Flex
        flexDirection="row"
        borderBottomWidth={HAIRLINE_WIDTH}
        borderColor="inputBorder"
        borderRadius="base"
        alignItems="center"
      >
        {label && <Label />}
        <Flex flexDirection="row" flex={1}>
          <Box flexGrow={1}>
            <TextInput
              ref={ref}
              pl="xs"
              {...rest}
              style={[
                style,
                {
                  height: 40, // TODO: Use Theme
                  fontSize: 16, // TODO: Use Theme
                },
              ]}
              placeholderTextColor={theme.colors.inputPlaceholder}
              value={inputValue}
              onChangeText={handleChange}
              secureTextEntry={isEyeOpen}
            />
          </Box>
          {isPassword && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsEyeOpen(!isEyeOpen)}
              style={{ marginRight: theme.spacing.m }}
            >
              <Icon
                type="entypo"
                name={isEyeOpen ? 'eye-with-line' : 'eye'}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          )}
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
