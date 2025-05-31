import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function BottomNav() {
  const handleAlert = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={() => {}}>
        <Image source={require('../assets/hut.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {}}>
        <Image source={require('../assets/search.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {}}>
        <Image source={require('../assets/reels.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {}}>
        <Image source={require('../assets/shopping-bag.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={handleAlert}>
        <Image source={require('../assets/profile-user.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  icon: {
    width: 22,
    height: 22,
  },
});
