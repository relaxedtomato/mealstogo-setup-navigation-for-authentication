import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topbar: {
    backgroundColor: 'orange',
    height: 65,
    // Note: only works on Android
    marginTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
  },
  bottomNavigation: {
    backgroundColor: 'blue',
    height: 65,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Text>Topbar</Text>
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
      <View style={styles.bottomNavigation}>
        <Text>Bottom Navigation</Text>
      </View>
    </SafeAreaView>
  );
}
