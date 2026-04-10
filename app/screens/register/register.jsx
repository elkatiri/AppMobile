import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable
} from "react-native";
import Input from "../../../components/input";
import LoginButton from "../../../components/loginButton";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import ExtraLinks from "../../../components/extraLinks";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Register = ({ onLoginPress }) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundBottom} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={insets.top + 12}
        style={styles.keyboardContainer}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
          automaticallyAdjustKeyboardInsets
          contentContainerStyle={styles.scrollContainer}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.backContainer}>
              <Pressable onPress={() => router.back()} style={styles.backButton}>
                <FontAwesome name="arrow-left" size={16} color="#163172" />
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            </View>

            <View style={styles.heroCard}>
              <View style={styles.imageOrb}>
                <Image
                  style={styles.image}
                  source={require("../../assets/images/objects.png")}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.header}>
              <Text style={styles.eyebrow}>Create your space</Text>
              <Text style={styles.title}>Build a profile that opens doors</Text>
              <Text style={styles.description}>
                Set up your account once and keep your progress, alerts, and applications organized.
              </Text>
            </View>

            <View style={styles.formCard}>
              <View style={styles.formHeader}>
                <Text style={styles.formTitle}>Create your account</Text>
                <Text style={styles.formSubtitle}>Use an email address you check regularly for updates.</Text>
              </View>

              <View style={styles.form}>
                <Input placeholder="Enter your email" />
                <Input placeholder="Enter your password" secureTextEntry />
                <Input placeholder="Confirm your password" secureTextEntry />
                <Pressable>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </Pressable>

                <LoginButton title="Register" style={styles.primaryButton} />

                <View style={styles.signupContainer}>
                  <Text style={styles.signupText}>
                    Already have an account?
                  </Text>
                  <Pressable onPress={onLoginPress}>
                    <Text style={styles.signupLink}> Sign In</Text>
                  </Pressable>
                </View>

                <ExtraLinks />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#eef4ff",
  },

  backgroundTop: {
    position: "absolute",
    top: -90,
    right: -40,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#d7e5ff",
  },

  backgroundBottom: {
    position: "absolute",
    bottom: -70,
    left: -70,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#dce8ff",
    opacity: 0.55,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingBottom: 36,
  },

  keyboardContainer: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  contentWrapper: {
    flexGrow: 1,
  },

  heroCard: {
    alignItems: "center",
    marginTop: 4,
  },

  imageOrb: {
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.09,
    shadowRadius: 26,
    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
  },

  header: {
    alignItems: "center",
    marginTop: 22,
    marginBottom: 18,
    paddingHorizontal: 8,
  },

  eyebrow: {
    color: "#5570b4",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#10214d",
    textAlign: "center",
    lineHeight: 36,
  },

  description: {
    fontSize: 15,
    color: "#62708f",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 24,
    lineHeight: 22,
  },

  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingVertical: 24,
    marginBottom: 24,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 5,
  },

  formHeader: {
    marginBottom: 18,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#10214d",
    marginBottom: 6,
  },

  formSubtitle: {
    fontSize: 14,
    color: "#6c7895",
    lineHeight: 20,
  },

  form: {
    marginTop: 4,
  },

  forgotPassword: {
    color: "#0f3cc9",
    textAlign: "right",
    marginBottom: 22,
    marginTop: 2,
    fontWeight: "600",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signupText: {
    color: "#6c7895",
  },

  signupLink: {
    color: "#0f3cc9",
    fontWeight: "700",
  },
  backContainer: {
    paddingTop: 10,
    paddingBottom: 8,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backText: {
    color: "#163172",
    fontWeight: "700",
    fontSize: 15,
  },
  primaryButton: {
    width: "100%",
  },
});