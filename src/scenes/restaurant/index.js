import React from 'react';
import { SafeAreaView } from 'react-native';

import RestaurantDetails from './components/RestaurantDetails';

const Restaurant = ({ navigation }) => (
  <SafeAreaView>
    <RestaurantDetails navigation={navigation} />
  </SafeAreaView>
);

export default Restaurant;
