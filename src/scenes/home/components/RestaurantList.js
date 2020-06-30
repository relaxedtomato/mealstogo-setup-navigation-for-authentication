import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import CloseByRestaurant from './CloseByRestaurant';
import FavRestaurants from './FavRestaurants';
import RestaurantData from '~/services/RestaurantData';
import { Spacing, Typography } from '~/styles';

const createRestaurantData = openRestaurant => [
  {
    title: 'Favorites',
    data: [RestaurantData.results.slice(11, 16)], // [[r1, r2, r3]]
    /* eslint-disable-next-line */
    renderItem: ({ item }) => (
      <FavRestaurants openRestaurant={openRestaurant} item={item} />
    ),
  },
  {
    title: 'Close by',
    data: RestaurantData.results.slice(0, 10), // [r1, r2, r3]
    /* eslint-disable-next-line */
    renderItem: ({ item }) => (
      <CloseByRestaurant openRestaurant={openRestaurant} item={item} />
    ),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Spacing.medium,
  },
  sectionHeader: {
    ...Typography.sectionHeader,
  },
});

const RestaurantList = ({ openRestaurant }) => (
  <View style={styles.container}>
    <SectionList
      sections={createRestaurantData(openRestaurant)}
      keyExtractor={restaurant => restaurant.place_id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

RestaurantList.propTypes = {
  openRestaurant: PropTypes.func.isRequired,
};

export default RestaurantList;
