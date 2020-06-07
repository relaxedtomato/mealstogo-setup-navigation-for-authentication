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
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#b0b0b0',
  },
});

const Icon = ({ icon, label }) => (
  <View style={styles.iconContainer}>
    {icon}
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

const BottomNavigation = () => (
  <View style={styles.container}>
    <Icon icon={<Home width={32} height={32} />} label="Home" />
    <Icon icon={<Search width={32} height={32} />} label="Search" />
    <Icon icon={<Profile width={32} height={32} />} label="Profile" />
  </View>
);

export default BottomNavigation;
