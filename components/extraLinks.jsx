import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const providers = [
  { name: 'google', icon: 'google' },
  { name: 'facebook', icon: 'facebook' },
  { name: 'apple', icon: 'apple' },
];

const ExtraLinks = () => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Or continue with</Text>

      <View style={styles.row}>
        {providers.map((item) => {
          const isActive = selected === item.name;

          return (
            <Pressable
              key={item.name}
              onPress={() => setSelected(item.name)}
              android_ripple={{ color: '#ccc', borderless: true }}
              style={({ pressed }) => [
                styles.link,
                isActive && styles.active,
                pressed && styles.pressed
              ]}
            >
              <FontAwesome
                name={item.icon}
                size={20}
                color={isActive ? '#fff' : '#1F41BB'}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default ExtraLinks;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 28,
  },
  title: {
    color: '#5e6a86',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 14,
    letterSpacing: 0.4,
  },
  row: {
    flexDirection: 'row',
    gap: 14,
  },
  link: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: '#f8fbff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d7def0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  active: {
    backgroundColor: '#0f3cc9',
    borderColor: '#0f3cc9',
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.97 }],
  },
});