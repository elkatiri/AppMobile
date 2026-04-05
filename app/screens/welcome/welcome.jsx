import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import LoginButton from '../../../components/loginButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function Welcome() {
  const [focused, setFocused] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Top Images */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.ellipse}
          source={require('../../assets/images/objects.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/welcome.png')}
        />
      </View>

      {/* Titles & Description */}
      <View style={styles.textContainer}>
        <Text style={styles.bigTitle}>Discover Your Dream Job Here</Text>
        <Text style={styles.description}>
          Explore all the most exciting job roles based on your interests and study major
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.actionButtons}>
        <LoginButton title="Login" style={[styles.buttonSpacing, focused && styles.focusedButton]} setFocused={setFocused} />
        <LoginButton title="Register" white style={[styles.buttonSpacing, focused && styles.focusedButton]} setFocused={setFocused} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between', // space between top, middle, bottom
    backgroundColor: '#fff',
  },

  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2, // takes more space than text/buttons
    position: 'relative',
  },

  image: {
    width: width * 0.9, // responsive width
    height: height * 0.35, // responsive height
    resizeMode: 'contain',
  },

  ellipse: {
    position: 'absolute',
    top: -40,
    right:0,
    width: 300,
    height: 300,
    aspectRatio: 1,
    zIndex: -1, // behind the main image
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  bigTitle: {
    fontSize: 32,
    color: '#1F41BB',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    lineHeight: 24,
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonSpacing: {
    marginHorizontal: 10, // spacing between buttons
  },
  focusedButton: {
    borderWidth: 1,
    borderColor: '#1F41BB',
    opacity: 0.8,
  },
});