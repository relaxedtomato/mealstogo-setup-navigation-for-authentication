import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    <Text>Home</Text>
    <Text>Search</Text>
    <Text>Profile</Text>
  </View>
);

export default BottomNavigation;
