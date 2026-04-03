import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import { LoginButton } from './login-button';
import { LoginHeader } from './login-header';
import { LoginInput } from './login-input';
import { loginStyles } from './login-styles';

export function LoginScreen() {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      style={loginStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={loginStyles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <LoginHeader name="Elkatiri" />

        <View style={loginStyles.inputContainer}>
          <LoginInput
            placeholder="Enter your email"
            isFocused={isEmailFocused}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <LoginInput
            placeholder="Enter your password"
            secureTextEntry
            autoFocus
            isFocused={isPasswordFocused}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
        </View>

        <LoginButton title="Log in" />
      </ScrollView> 
    </KeyboardAvoidingView>
  );
}