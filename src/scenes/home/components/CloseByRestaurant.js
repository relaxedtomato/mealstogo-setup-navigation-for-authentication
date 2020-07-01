import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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

const CloseByRestaurant = ({ openRestaurant, item: restaurant }) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.8}
    onPress={() =>
      openRestaurant({
        image: restaurant.image,
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        vicinity: restaurant.vicinity,
      })
    }
  >
    <Image style={styles.image} source={restaurant.image} />
    <Text style={styles.name}>{restaurant.name}</Text>
    <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
    <Text style={styles.vicinity}>{restaurant.vicinity}</Text>
  </TouchableOpacity>
);

CloseByRestaurant.propTypes = {
  item: restaurantPropTypes.isRequired,
  openRestaurant: PropTypes.func.isRequired,
};

export default CloseByRestaurant;
