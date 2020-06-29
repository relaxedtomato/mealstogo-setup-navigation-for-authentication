import React from 'react';
import { SafeAreaView } from 'react-native';

import RestaurantDetails from './components/RestaurantDetails';
import { navigationPropTypes } from '~/types';

const Restaurant = ({ navigation }) => (
  <SafeAreaView>
    <RestaurantDetails navigation={navigation} />
  </SafeAreaView>
);

Restaurant.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Restaurant;
