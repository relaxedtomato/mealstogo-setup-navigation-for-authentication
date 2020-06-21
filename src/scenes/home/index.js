import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import BottomNavigation from '~/components/BottomNavigation';
import TopBar from '~/components/TopBar';
import RestaurantList from './components/RestaurantList';
import { Colors } from '~/styles';

const HEIGHT = 65;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    height: HEIGHT,
    // Note: only works on Android
    marginTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  bottomNavigation: {
    height: HEIGHT,
  },
});

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TopBar />
      </View>
      <View style={styles.content}>
        <RestaurantList />
      </View>
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}
