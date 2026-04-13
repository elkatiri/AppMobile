import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({ placeholder, value, secureTextEntry, ...textInputProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.wrapper, isFocused && styles.wrapperFocused]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8a94b2"
        value={value}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...textInputProps}
      />
    </View>
  );
}
export default Input;
const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: '#d7def0',
    borderRadius: 18,
    backgroundColor: '#f8fbff',
    marginBottom: 14,
    width: '100%',
    overflow: 'hidden',
  },
  wrapperFocused: {
    borderColor: '#0f3cc9',
    shadowColor: '#0f3cc9',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 4,
  },
  input: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    color: '#10214d',
  },
});