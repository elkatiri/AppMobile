import { router } from "expo-router";
import Login from "./screens/login/login";

export default function LoginRoute() {
  return <Login onRegisterPress={() => router.push("/register")} />;
}