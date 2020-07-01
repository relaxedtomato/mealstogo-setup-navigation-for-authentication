import React, { useState } from 'react';
import {
  Image,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Typography, Spacing } from '~/styles';
import BackArrow from '~/assets/icons/back-arrow.svg';
import Fav from '~/assets/icons/heart.svg';
import FavSelected from '~/assets/icons/heart-solid.svg';
import { ICON_DIMENSIONS } from '~/utils/constants';
import { navigationPropTypes, restaurantPropTypes } from '~/types';

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
    top: -100,
  },
  name: {
    fontFamily: 'lora-bold',
    marginTop: Spacing.large,
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
    ...Platform.select({
      android: {
        top: Spacing.medium,
      },
    }),
  },
  fav: {
    position: 'relative',
    top: 6,
    right: -6,
  },
  favBackground: {
    position: 'relative',
    alignSelf: 'flex-end',
    top: -75,
    right: Spacing.large,
    backgroundColor: Colors.lightGray,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    borderRadius: 44 / 2,
    elevation: 2,
    width: 44,
    height: 44,
    zIndex: 1,
  },
});

const RestaurantDetails = ({ route, navigation }) => {
  const { width: iconWidth, height: iconHeight } = ICON_DIMENSIONS;
  // TODO: temporary, connect to database later
  const [isFav, onFav] = useState(false);
  const { image, name, cuisine, vicinity } = route.params.details;

  return (
    <View>
      <Image style={styles.image} source={image} />
      <TouchableOpacity
        style={styles.favBackground}
        hitSlop={{ top: 50, left: 50, bottom: 50, right: 50 }}
        activeOpacity={0.8}
        onPress={() => onFav(!isFav)}
      >
        {isFav ? (
          <FavSelected
            style={styles.fav}
            width={iconWidth}
            height={iconHeight}
            fill={Colors.red}
          />
        ) : (
          <Fav
            style={styles.fav}
            width={iconWidth}
            height={iconHeight}
            fill={Colors.mediumGray}
          />
        )}
      </TouchableOpacity>
      <View style={styles.restaurantDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cuisine}>{cuisine}</Text>
        <Text style={styles.vicinity}>{vicinity}</Text>
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
};

RestaurantDetails.propTypes = {
  navigation: navigationPropTypes.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      details: restaurantPropTypes.isRequired,
    }),
  }).isRequired,
};

export default RestaurantDetails;
