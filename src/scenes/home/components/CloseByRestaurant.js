import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import restaurantPropTypes from './restaurantPropTypes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    padding: 10,
  },
  name: {
    marginTop: 16,
    fontSize: 16,
  },
  cuisine: {
    marginTop: 8,
    fontSize: 12,
  },
  vicinity: {
    marginTop: 8,
    fontSize: 12,
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
