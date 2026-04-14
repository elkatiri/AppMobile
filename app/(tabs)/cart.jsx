import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function CartRoute() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <FontAwesome name="shopping-cart" size={28} color="#163172" />
      </View>
      <Text style={styles.title}>Your cart is empty</Text>
      <Text style={styles.description}>
        Save products here once you are ready to build a real cart flow.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    backgroundColor: "#eef4ff",
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dce8ff",
    marginBottom: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#163172",
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#5f6f93",
    textAlign: "center",
  },
});