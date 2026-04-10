import { router } from "expo-router";
import Welcome from "./screens/welcome/welcome";

export default function HomeScreen() {
  return (
    <Welcome
      onLoginPress={() => router.push("/login")}
      onRegisterPress={() => router.push("/register")}
    />
  );
}