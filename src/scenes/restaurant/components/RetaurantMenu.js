import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Spacing } from '~/styles';
import CuisineData from '~/services/CuisineData';
import MenuSection from './MenuSection';

const styles = StyleSheet.create({
  container: {
    margin: Spacing.medium,
    top: -100,
  },
});

const RestaurantMenu = () => {
  // TODO: temporary, use actual cuisine value passed
  const cuisine = 'mexican';
  const { menu } = CuisineData[cuisine];

  return (
    <View style={styles.container}>
      {menu.map(({ menuSectionName, menuSectionItems }) => (
        <MenuSection
          name={menuSectionName}
          items={menuSectionItems}
          key={menuSectionName}
        />
      ))}
    </View>
  );
};

export default RestaurantMenu;
