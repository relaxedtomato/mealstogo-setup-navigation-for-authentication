import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import restaurantPropTypes from './restaurantPropTypes';
import { Colors, Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    marginVertical: Spacing.small,
    padding: 10,
  },
  name: {
    marginTop: Spacing.medium,
    fontSize: Typography.largeFontSize,
  },
  cuisine: {
    marginTop: Spacing.small,
    fontSize: Typography.baseFontSize,
  },
  vicinity: {
    marginTop: Spacing.small,
    fontSize: Typography.baseFontSize,
  },
  image: {
    width: 305,
    height: 150,
  },
});

const CloseByRestaurant = ({ item: restaurant }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={restaurant.image} />
    <Text style={styles.name}>{restaurant.name}</Text>
    <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
    <Text style={styles.vicinity}>{restaurant.vicinity}</Text>
  </View>
);

CloseByRestaurant.propTypes = {
  item: restaurantPropTypes.isRequired,
};

export default CloseByRestaurant;
