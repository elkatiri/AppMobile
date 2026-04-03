import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello </Text>
          <Text style={styles.titleSpan}>Elkatiri</Text>
        </View>

        <Text style={styles.subtitle}>Log in to your account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            style={[styles.input, isEmailFocused && styles.inputFocused]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            autoFocus
            style={[styles.input, isPasswordFocused && styles.inputFocused]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          {({ pressed }) => (
            <Text style={styles.buttonText}>{pressed ? 'Loading...' : 'Log in'}</Text>
          )}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  titleSpan: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff5900',
  },

  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },

  inputContainer: {
    width: '100%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  inputFocused: {
    borderColor: '#ff5900',
    backgroundColor: 'rgba(255, 89, 0, 0.05)',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#ff5900',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});