import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

import CloseByRestaurant from './CloseByRestaurant';
import FavRestaurants from './FavRestaurants';
import RestaurantData from '~/services/RestaurantData';
import { Spacing, Typography } from '~/styles';

const RESTAURANT_DATA = [
  {
    title: 'Favorites',
    data: [RestaurantData.results.slice(11, 16)], // [[r1, r2, r3]]
    renderItem: FavRestaurants,
  },
  {
    title: 'Close by',
    data: RestaurantData.results.slice(0, 10), // [r1, r2, r3]
    renderItem: CloseByRestaurant,
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

const RestaurantList = () => (
  <View style={styles.container}>
    <SectionList
      sections={RESTAURANT_DATA}
      keyExtractor={restaurant => restaurant.place_id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default RestaurantList;
