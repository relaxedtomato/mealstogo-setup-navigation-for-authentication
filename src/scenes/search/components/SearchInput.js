import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Typography, Spacing } from '~/styles';
import { TOP_BAR_HEIGHT } from '~/utils/constants';
import CancelIcon from '~/assets/icons/cancel';
import { restaurantPropTypes } from '~/types';

const styles = StyleSheet.create({
  textInput: {
    ...Typography.bodyText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.mediumGray,
    color: Colors.mediumGray,
    height: TOP_BAR_HEIGHT,
    paddingLeft: Spacing.medium,
    paddingVertical: Spacing.medium,
  },
  cancelButton: {
    position: 'absolute',
    right: Spacing.medium,
    top: 12,
  },
});

const SearchInput = ({
  onChangeText,
  searchText,
  restaurantData,
  onUpdateSearchResults,
}) => (
  <View>
    <TextInput
      onFocus={() => onChangeText('')}
      onChangeText={input => {
        const updatedRestaurants = restaurantData.filter(
          ({ name, cuisine }) =>
            name.toLowerCase().includes(input.toLowerCase()) ||
            cuisine.toLowerCase().includes(input.toLowerCase())
        );
        onChangeText(input);
        onUpdateSearchResults(updatedRestaurants);
      }}
      value={searchText}
      style={styles.textInput}
    />
    <TouchableOpacity
      style={styles.cancelButton}
      onPress={() => {
        onChangeText('');
        onUpdateSearchResults(restaurantData);
      }}
    >
      <CancelIcon width={25} height={25} fill={Colors.mediumGray} />
    </TouchableOpacity>
  </View>
);

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onUpdateSearchResults: PropTypes.func.isRequired,
  restaurantData: PropTypes.arrayOf(restaurantPropTypes).isRequired,
};

export default SearchInput;
