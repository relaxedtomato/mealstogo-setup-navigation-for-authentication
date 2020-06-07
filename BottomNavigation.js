import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './assets/icons/home.svg';
import Search from './assets/icons/search.svg';
import Profile from './assets/icons/profile.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginLeft: 16,
  },
});

const BottomNavigation = () => (
  <View style={styles.container}>
    <Home width={32} height={32} />
    <Search width={32} height={32} />
    <Profile width={32} height={32} />
  </View>
);

export default BottomNavigation;
