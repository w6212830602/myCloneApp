import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopNav from './components/TopNav';
import MainSection from './components/MainSection';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <TopNav />
        <View style={styles.content}>
          <MainSection />
        </View>
        <SafeAreaView edges={['bottom']} style={styles.bottomNav}>
          <BottomNav />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    backgroundColor: '#FFF',
  },
});
