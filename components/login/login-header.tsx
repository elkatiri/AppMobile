import { Text, View } from 'react-native';

import { loginStyles } from './login-styles';

type LoginHeaderProps = {
  name: string;
};

export function LoginHeader({ name }: LoginHeaderProps) {
  return (
    <>
      <View style={loginStyles.header}>
        <Text style={loginStyles.title}>Hello </Text>
        <Text style={loginStyles.titleSpan}>{name}</Text>
      </View>
      <Text style={loginStyles.subtitle}>Log in to your account</Text>
    </>
  );
}