import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Spacing, Typography } from '~/styles';
import { restaurantPropTypes } from '~/types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    bottom: Spacing.xsmall,
    height: '20%',
    position: 'absolute',
    width: '95%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
    flexDirection: 'row',
  },
  image: {
    width: '40%',
    height: '90%',
    borderRadius: 5,
    marginLeft: Spacing.small,
    marginTop: Spacing.small,
  },
  name: {
    ...Typography.bodyText,
    fontFamily: 'lora-bold',
    marginTop: Spacing.small,
  },
  detailContainer: {
    marginLeft: Spacing.medium,
    marginRight: Spacing.xsmall,
  },
  cuisine: {
    ...Typography.bodyText,
    fontFamily: 'lora-italic',
    marginTop: Spacing.small,
  },
  vicinity: {
    ...Typography.bodyText,
    marginTop: Spacing.small,
  },
});

const RestaurantSelected = ({ restaurant, openRestaurant }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() =>
      openRestaurant({
        image: restaurant.image,
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        vicinity: restaurant.vicinity,
      })
    }
    activeOpacity={0.8}
  >
    <Image style={styles.image} source={restaurant.image} />
    <View style={styles.detailContainer}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
      <Text style={styles.vicinity}>{restaurant.vicinity}</Text>
    </View>
  </TouchableOpacity>
);

RestaurantSelected.propTypes = {
  restaurant: restaurantPropTypes.isRequired,
  openRestaurant: PropTypes.func.isRequired,
};

export default RestaurantSelected;
