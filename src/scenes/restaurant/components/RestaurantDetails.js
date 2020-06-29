import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Typography, Spacing } from '~/styles';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 225,
  },
  restaurantDetails: {
    width: '90%',
    elevation: 2,
    backgroundColor: Colors.lightGray,
    height: 175,
    borderRadius: 10,
    alignSelf: 'center',
    top: -50,
  },
  name: {
    fontFamily: 'lora-bold',
    marginTop: Spacing.small,
    textAlign: 'center',
    fontSize: Typography.xlargeFontSize,
  },
  cuisine: {
    fontFamily: 'lora-italic',
    marginTop: Spacing.small,
    textAlign: 'center',
    fontSize: Typography.largeFontSize,
  },
  vicinity: {
    ...Typography.bodyText,
    marginTop: Spacing.small,
    textAlign: 'center',
    fontSize: Typography.largeFontSize,
    textDecorationLine: 'underline',
  },
});

const RestaurantDetails = ({ navigation }) => (
  <View>
    <Image
      style={styles.image}
      source={require('~/assets/cuisine/mexican/mexican.jpg')}
    />
    <View style={styles.restaurantDetails}>
      <Text style={styles.name}>El Takito</Text>
      <Text style={styles.cuisine}>Mexican</Text>
      <Text style={styles.vicinity}>Silicon Valley</Text>
    </View>
  </View>
);

export default RestaurantDetails;
