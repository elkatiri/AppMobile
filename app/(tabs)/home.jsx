import { useLocalSearchParams } from "expo-router";
import Home from "../screens/home/home";

export default function HomeRoute() {
  const { email } = useLocalSearchParams();

  return <Home email={email} />;
}