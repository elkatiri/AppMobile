import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function LoginButton({ title, white, setFocused, onPress, style, textStyle }) {
  return (
    <Pressable
      onFocus={() => setFocused?.(true)}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        white ? styles.whiteContainer : styles.primaryContainer,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, white && styles.whiteText, textStyle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    minWidth: 160,
    height: 56,
    paddingHorizontal: 24,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  primaryContainer: {
    backgroundColor: '#0f3cc9',
  },
  whiteContainer: {
    backgroundColor: '#f8fbff',
    borderWidth: 1,
    borderColor: '#d5e2ff',
  },
  whiteText: {
    color: '#163172',
  },
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.98 }],
  },
})