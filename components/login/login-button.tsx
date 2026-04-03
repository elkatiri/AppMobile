import { Pressable, Text } from 'react-native';

import { loginStyles } from './login-styles';

type LoginButtonProps = {
  title: string;
  loadingTitle?: string;
};

export function LoginButton({ title, loadingTitle = 'Loading...' }: LoginButtonProps) {
  return (
    <Pressable style={({ pressed }) => [loginStyles.button, pressed && loginStyles.buttonPressed]}>
      {({ pressed }) => (
        <Text style={loginStyles.buttonText}>{pressed ? loadingTitle : title}</Text>
      )}
    </Pressable>
  );
}