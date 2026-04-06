import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    marginTop: 25,
    cursor: 'pointer',
  },
  title: {
    color: '#1F41BB',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  link: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Android shadow
  },
  active: {
    backgroundColor: '#1F41BB',
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
});