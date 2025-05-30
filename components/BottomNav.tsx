import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default function BottomNav() {
  const handleAlert = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => {}} />
      <Button title="Search" onPress={() => {}} />
      <Button title="Profile" onPress={handleAlert} /> {/* This button will show an alert when pressed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingHorizontal: 16,
  },
});
