import React from 'react';
import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import RestaurantData from './RestaurantData';

const RESTAURANT_DATA = [
  {
    title: 'Favorites',
    data: [RestaurantData.results.slice(11, 16)], // [[r1, r2, r3]]
    renderItem: ({ item: restaurants }) => (
      <FavRestaurant restaurants={restaurants} />
    ),
  },
  {
    title: 'Close by',
    data: RestaurantData.results.slice(0, 10), // [r1, r2, r3]
    renderItem: ({ item: restaurant }) => (
      <ClosebyRestaurant restaurant={restaurant} />
    ),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  closebyContainer: {
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '900',
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
  closebyImage: {
    width: 305,
    height: 150,
  },
  favContainer: {
    padding: 8,
    backgroundColor: '#f9f9f9',
  },
  favImage: {
    width: 150,
    height: 100,
  },
});

const ClosebyRestaurant = ({ restaurant }) => (
  <View style={styles.closebyContainer}>
    <Image style={styles.closebyImage} source={restaurant.image} />
    <Text style={styles.name}>{restaurant.name}</Text>
    <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
    <Text style={styles.vicinity}>{restaurant.vicinity}</Text>
  </View>
);

ClosebyRestaurant.propTypes = {
  restaurant: PropTypes.shape({
    image: PropTypes.number,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    vicinity: PropTypes.string,
  }).isRequired,
};

const FavRestaurant = ({ restaurants }) => (
  <ScrollView horizontal>
    {restaurants.map(restaurant => (
      <View style={styles.favContainer} key={restaurant.place_id}>
        <Image source={restaurant.image} style={styles.favImage} />
        <Text style={styles.name}>{restaurant.name}</Text>
      </View>
    ))}
  </ScrollView>
);

const RestaurantList = () => (
  <View style={styles.container}>
    <SectionList
      sections={RESTAURANT_DATA}
      keyExtractor={restaurant => restaurant.place_id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  </View>
);

export default RestaurantList;
