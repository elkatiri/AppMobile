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
import { SafeAreaView } from "react-native-safe-area-context";
import ExtraLinks from "../../../components/extraLinks";

const Register = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >

          {/* Image */}
          <Image
            style={styles.image}
            source={require("../../assets/images/objects.png")}
          />

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Register Here</Text>
            <Text style={styles.description}>
              Create a new account to get started!
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input placeholder="Enter your email" />
            <Input placeholder="Enter your password" secureTextEntry />
            <Input placeholder="Confirm your password" secureTextEntry />
            <Pressable>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </Pressable>

            <LoginButton title="Register" />

            {/* Signup */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Already have an account?
              </Text>
              <Pressable>
                <Text style={styles.signupLink}> Sign In</Text>
              </Pressable>
            </View>
          </View>

          {/* Social login */}
          <ExtraLinks />

        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  image: {
    width: "100%",
    height: 250,
  },

  header: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F41BB",
  },

  description: {
    fontSize: 15,
    color: "#444",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  form: {
    paddingHorizontal: 25,
    marginTop: 10,
  },

  forgotPassword: {
    color: "#1F41BB",
    textAlign: "right",
    marginBottom: 20,
    marginTop: 5,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signupText: {
    color: "#444",
  },

  signupLink: {
    color: "#1F41BB",
    fontWeight: "600",
  },
});