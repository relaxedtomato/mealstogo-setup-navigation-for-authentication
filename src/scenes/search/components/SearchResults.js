import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
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

const Restaurant = ({ name }) => (
  <View style={styles.restaurantContainer}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
};

const SearchResults = ({ restaurants }) => (
  <FlatList
    data={restaurants}
    renderItem={({ item: restaurant }) => <Restaurant name={restaurant.name} />}
    keyExtractor={item => item.place_id}
  />
);

SearchResults.propTypes = {
  restaurants: PropTypes.arrayOf(restaurantPropTypes).isRequired,
};

export default SearchResults;
