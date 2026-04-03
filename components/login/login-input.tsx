import { TextInput, TextInputProps } from 'react-native';

import { loginStyles } from './login-styles';

type LoginInputProps = TextInputProps & {
  isFocused: boolean;
};

export function LoginInput({ isFocused, style, ...props }: LoginInputProps) {
  return (
    <TextInput
      {...props}
      style={[loginStyles.input, isFocused && loginStyles.inputFocused, style]}
    />
  );
}