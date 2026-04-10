import { router } from "expo-router";
import Register from "./screens/register/register";

export default function RegisterRoute() {
  return <Register onLoginPress={() => router.push("/login")} />;
}