import { TextInput } from "react-native";
import React from "react";
const Input = ({ placeholder, value, secureTextEntry }) => {
  return (
    <TextInput style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
}
export default Input;
const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 'auto',
    width: '90%',
  },
};