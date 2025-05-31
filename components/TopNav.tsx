import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// //Please install 
// npx expo install expo-linear-gradient
// npx expo install @expo/vector-icons
// npx expo install react-native-svg

export default function TopNav() {
  const handlePress = () => {
    Alert.alert("Assignment 1 Completed");
  };
//searched google for "expo linear gradient"
  return (
    <LinearGradient 
      colors={['#528D8F', '#528D8F', '#C1D8D5', '#F4F7F4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Ionicons name="mail" size={28} color="#FFFFFF" />
      <Image
        source={require('../assets/suntea-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />     
      <Ionicons name="menu" size={32} color="#FFFFFF" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  logo: {
    width: 100,
    height: 40,
  },
});
