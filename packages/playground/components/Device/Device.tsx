import React, { ReactNode } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
  deviceWrapper: {
    maxWidth: 400,
    width: '100%',
  },
  device: {
    position: 'relative',
    backgroundSize: 'cover',
    paddingBottom: '198.89807163%',
    zIndex: 0,
  },
  screen: {
    flex: 1,
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    pointerEvents: 'auto',
    zIndex: 10,
    marginTop: 60,
    marginHorizontal: 30,
    width: '85%',
  },
})

export const Device = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <View style={styles.deviceWrapper}>
      <ImageBackground source={{ uri: require('./iphone-portrait.png') }} style={styles.device}>
        <View style={styles.screen}>{children}</View>
      </ImageBackground>
    </View>
  )
}
