import React, { ReactNode } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#43ABDA',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    marginBottom: 0,
    padding: 8,
    alignSelf: 'center',
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
  },
})

export const Button = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
}
