import react from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
export default function LoginButton({title, white, setFocused}) {
  return (
    <Pressable onFocus={() => setFocused(true)} style ={[style.container, white && style.whiteContainer]}>
      <Text style={[style.text,white && style.whiteText]}>{title}</Text>
    </Pressable>
  )
}
const style=StyleSheet.create({
  container: {
    backgroundColor: '#1F41BB',
    width: 180,
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal:40,
    paddingVertical: 5,
  },
  whiteContainer: {
    backgroundColor: '#fff'
  },
  whiteText: {
    color: '#000000',
  }
})