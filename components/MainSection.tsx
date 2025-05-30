import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MainSection() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/sample-image.png')} // Ensure you have an image in the assets folder
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Product Title</Text>
      <Text style={styles.description}>This is a short product description.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
  },
});
