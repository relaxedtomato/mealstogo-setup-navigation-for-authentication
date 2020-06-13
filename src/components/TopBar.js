import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Map from '../../assets/icons/map';

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

const TopBar = () => (
  <View style={styles.container}>
    <Text>Silicon Valley</Text>
    <Map width={32} height={32} />
  </View>
);

export default TopBar;
