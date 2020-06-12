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

const DATA = [
  {
    title: 'Favorites',
    data: [RestaurantData.results.slice(11, 16)], // [[r1, r2, r3]]
    renderItem: ({ item }) => <FavRestaurant data={item} />,
  },
  {
    title: 'Close by',
    data: RestaurantData.results.slice(0, 10), // [r1, r2, r3]
    renderItem: ({ item }) => <ClosebyRestaurant data={item} />,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
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
  image: {
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

const ClosebyRestaurant = ({ data }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={data.image} />
    <Text style={styles.name}>{data.name}</Text>
    <Text style={styles.cuisine}>{data.cuisine}</Text>
    <Text style={styles.vicinity}>{data.vicinity}</Text>
  </View>
);

ClosebyRestaurant.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.number,
    name: PropTypes.string,
    cuisine: PropTypes.string,
    vicinity: PropTypes.string,
  }).isRequired,
};

const FavRestaurant = ({ data }) => (
  <ScrollView horizontal>
    {data.map(item => (
      <View style={styles.favContainer}>
        <Image source={item.image} style={styles.favImage} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    ))}
  </ScrollView>
);

const RestaurantList = () => (
  <View style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={item => item.place_id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  </View>
);

export default RestaurantList;
