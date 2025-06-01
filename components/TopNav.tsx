import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
export default function TopNav() {
  const handlePress = () => {
    Alert.alert("Assignment 1 Completed");
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Center Text */}
      <View style={styles.centerText}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.subtitle}>ootd_everyday</Text>
      </View>

      {/* Add Button */}
      <TouchableOpacity onPress={handlePress}>
      <Octicons name="diff-added" size={24} color="#3D403D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerText: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#909E8B',
  },
});
