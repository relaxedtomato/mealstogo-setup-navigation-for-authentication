import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import RestaurantDetails from './components/RestaurantDetails';
import RestaurantMenu from './components/RetaurantMenu';
import { navigationPropTypes } from '~/types';

const Restaurant = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView>
      <RestaurantDetails navigation={navigation} />
      <RestaurantMenu />
    </ScrollView>
  </SafeAreaView>
);

Restaurant.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Restaurant;
