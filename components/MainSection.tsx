import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function MainSection() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/main-section.jpg')} // Ensure this path is correct
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.77, 
  },
});
