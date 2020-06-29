import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Colors, Typography, Spacing } from '~/styles';
import BackArrow from '~/assets/icons/back-arrow.svg';
import { ICON_DIMENSIONS } from '~/utils/constants';
import { navigationPropTypes } from '~/types';

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
  backButton: {
    position: 'absolute',
    left: Spacing.small,
    top: Spacing.medium,
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
    <View style={styles.backButton}>
      <TouchableOpacity onPress={navigation.goBack}>
        <BackArrow
          width={ICON_DIMENSIONS.width}
          height={ICON_DIMENSIONS.height}
          fill={Colors.white}
        />
      </TouchableOpacity>
    </View>
  </View>
);

RestaurantDetails.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default RestaurantDetails;
