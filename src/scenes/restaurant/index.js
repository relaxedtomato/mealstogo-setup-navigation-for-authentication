import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import RestaurantDetails from './components/RestaurantDetails';
import RestaurantMenu from './components/RetaurantMenu';
import { navigationPropTypes, restaurantPropTypes } from '~/types';

const Restaurant = ({ route, navigation }) => (
  <SafeAreaView>
    <ScrollView>
      <RestaurantDetails navigation={navigation} route={route} />
      <RestaurantMenu />
    </ScrollView>
  </SafeAreaView>
);

Restaurant.propTypes = {
  navigation: navigationPropTypes.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      details: restaurantPropTypes.isRequired,
    }),
  }).isRequired,
};

export default Restaurant;
