import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { Typography, Spacing } from '~/styles';
import { restaurantPropTypes } from '~/types';

const styles = StyleSheet.create({
  restaurantContainer: {
    paddingVertical: Spacing.small,
    paddingLeft: Spacing.medium,
  },
  name: {
    ...Typography.bodyText,
    fontFamily: 'lora-bold',
  },
});

const Restaurant = ({ name, openRestaurant }) => (
  <TouchableOpacity
    style={styles.restaurantContainer}
    onPress={openRestaurant}
    activeOpacity={0.8}
  >
    <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  openRestaurant: PropTypes.func.isRequired,
};

const SearchResults = ({ restaurants, openRestaurant }) => (
  <FlatList
    data={restaurants}
    renderItem={({ item: restaurant }) => (
      <Restaurant
        name={restaurant.name}
        openRestaurant={() =>
          openRestaurant({
            image: restaurant.image,
            name: restaurant.name,
            cuisine: restaurant.cuisine,
            vicinity: restaurant.vicinity,
          })
        }
      />
    )}
    keyExtractor={item => item.place_id}
  />
);

SearchResults.propTypes = {
  restaurants: PropTypes.arrayOf(restaurantPropTypes).isRequired,
  openRestaurant: PropTypes.func.isRequired,
};

export default SearchResults;
