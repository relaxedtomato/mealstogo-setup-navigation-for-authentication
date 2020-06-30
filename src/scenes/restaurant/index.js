import React from 'react';
import { SafeAreaView } from 'react-native';

import RestaurantDetails from './components/RestaurantDetails';
import RestaurantMenu from './components/RetaurantMenu';
import { navigationPropTypes } from '~/types';

const Restaurant = ({ navigation }) => (
  <SafeAreaView>
    <RestaurantDetails navigation={navigation} />
    <RestaurantMenu />
  </SafeAreaView>
);

Restaurant.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Restaurant;
