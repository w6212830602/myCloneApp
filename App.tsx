import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TopNav from '../components/TopNav';
import MainSection from '../components/MainSection';
import BottomNav from '../components/BottomNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <MainSection />
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
