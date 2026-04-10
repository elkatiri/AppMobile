import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import LoginButton from '../../../components/loginButton';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

export default function Welcome({ onLoginPress, onRegisterPress }) {
  const [focused, setFocused] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundGlow} />

      <View style={styles.heroCard}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Career Compass</Text>
        </View>

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
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.eyebrow}>Built for bold first moves</Text>
        <Text style={styles.bigTitle}>Discover your next role with clarity</Text>
        <Text style={styles.description}>
          Explore curated job paths, sharpen your search, and move from browsing to applying with less friction.
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <LoginButton title="Login" style={[styles.button, focused && styles.focusedButton]} setFocused={setFocused} onPress={onLoginPress} />
        <LoginButton title="Register" white style={[styles.button, focused && styles.focusedButton]} setFocused={setFocused} onPress={onRegisterPress} />
      </View>

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>New here? Start with Register. Returning users can jump straight into Login.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#eef4ff',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 28,
  },
  backgroundTop: {
    position: 'absolute',
    top: -140,
    left: -70,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#d8e7ff',
  },
  backgroundGlow: {
    position: 'absolute',
    right: -100,
    bottom: 120,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#cfdcff',
    opacity: 0.5,
  },
  heroCard: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingTop: 18,
    paddingBottom: 10,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.08,
    shadowRadius: 28,
    elevation: 5,
  },
  badge: {
    alignSelf: 'center',
    backgroundColor: '#ebf2ff',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  badgeText: {
    color: '#0f3cc9',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.4,
  },

  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 8,
  },

  image: {
    width: width * 0.78,
    height: height * 0.31,
    resizeMode: 'contain',
  },

  ellipse: {
    position: 'absolute',
    top: -10,
    right: 6,
    width: 240,
    height: 240,
    aspectRatio: 1,
    opacity: 0.75,
    zIndex: -1,
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 24,
  },

  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: '#5570b4',
    marginBottom: 10,
  },

  bigTitle: {
    fontSize: 34,
    color: '#10214d',
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 14,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5b6785',
    lineHeight: 25,
    maxWidth: 330,
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  button: {
    marginHorizontal: 8,
  },
  focusedButton: {
    borderWidth: 1,
    borderColor: '#0f3cc9',
    opacity: 0.8,
  },
  footerNote: {
    paddingHorizontal: 14,
  },
  footerText: {
    textAlign: 'center',
    color: '#6d7895',
    fontSize: 13,
    lineHeight: 20,
  },
});