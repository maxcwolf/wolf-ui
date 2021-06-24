import React, { forwardRef, useState, useEffect, ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme'
import { Box, Flex, Text, TextInput, TextInputProps } from '../../base'
import { Icon } from '..'
import { HAIRLINE_WIDTH } from '../../helpers/constants'

const InputRequired = () => (
  <Text color="inputRequired" pt="s">
    *{' '}
  </Text>
)

export interface InputTextProps
  extends Omit<TextInputProps, 'placeholderTextColor' | 'onChange' | 'onChangeText'> {
  label?: ReactNode
  isPassword?: boolean // TODO: Add password `| 'password'`
  bottomContent?: ReactNode
  value?: string
  onChangeText?: (value: string) => void
  isRequired?: boolean
  onClear?: () => void
}

export const InputText = forwardRef<typeof TextInput, InputTextProps>(
  (
    {
      label,
      bottomContent,
      value,
      onChangeText,
      // onClear, TODO: Add onClear usage
      isRequired = false,
      isPassword = false,
      style,
      ...rest
    },
    ref
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

    // TODO: remove this and refactor
    const styleTextInput = {
      height: 40, // TODO: Use Theme
    }

    const Label = () => (
      <Flex flexDirection="row" marginHorizontal="s">
        {isRequired && <InputRequired />}
        {typeof label === 'string' ? <Text variant="formLabel">{label}</Text> : label}
      </Flex>
    )

    return (
      <Flex
        alignItems="center"
        borderBottomWidth={HAIRLINE_WIDTH}
        borderColor="inputBorder"
        borderRadius="base"
        flexDirection="row"
      >
        {label && <Label />}
        <Flex flex={1} flexDirection="row">
          <Box flexGrow={1}>
            <TextInput
              ref={ref}
              pl="xs"
              {...rest}
              placeholderTextColor={theme.colors.inputPlaceholder}
              secureTextEntry={isEyeOpen}
              style={[style, styleTextInput]}
              value={inputValue}
              variant="formValue"
              onChangeText={handleChange}
            />
          </Box>
          {isPassword && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginRight: theme.spacing.m }}
              onPress={() => setIsEyeOpen(!isEyeOpen)}
            >
              <Icon
                color={theme.colors.text}
                name={isEyeOpen ? 'eye-with-line' : 'eye'}
                type="entypo"
              />
            </TouchableOpacity>
          )}
        </Flex>
        {bottomContent && (
          <Box marginRight="m">
            {typeof bottomContent === 'string' ? <Text>{bottomContent}</Text> : bottomContent}
          </Box>
        )}
      </Flex>
    )
  }
)
