import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileRoute() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrap}>
        <FontAwesome name="user" size={28} color="#163172" />
      </View>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>
        This tab is ready for account info, saved products, and settings.
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
  avatarWrap: {
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