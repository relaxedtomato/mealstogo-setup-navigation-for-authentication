import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Map from '~/assets/icons/map';
import { Colors, Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Spacing.medium,
    paddingLeft: Spacing.medium,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightGray,
  },
  location: Typography.bodyText,
});

const TopBar = () => (
  <View style={styles.container}>
    <Text style={styles.location}>Silicon Valley</Text>
    <Map width={32} height={32} />
  </View>
);

export default TopBar;
