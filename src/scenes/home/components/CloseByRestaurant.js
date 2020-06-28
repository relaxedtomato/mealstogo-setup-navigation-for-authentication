import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { restaurantPropTypes } from '~/types';
import { Colors, Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: Spacing.small,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    ...Typography.bodyText,
    marginTop: Spacing.medium,
    fontFamily: 'lora-bold',
  },
  cuisine: {
    ...Typography.bodyText,
    marginTop: Spacing.small,
    fontFamily: 'lora-italic',
  },
  vicinity: {
    ...Typography.bodyText,
    marginTop: Spacing.small,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
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
