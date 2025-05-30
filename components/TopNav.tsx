import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopNav() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Navigation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
