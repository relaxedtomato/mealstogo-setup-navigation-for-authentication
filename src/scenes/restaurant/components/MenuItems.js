import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.small,
  },
  menuItem: {
    ...Typography.bodyText,
    fontSize: Typography.mediumFontSize,
  },
});

const MenuItems = ({ items }) => (
  <View>
    {items.map(({ item, price }) => (
      <View style={styles.menuItemContainer}>
        <Text style={styles.menuItem}>{item}</Text>
        <Text style={styles.menuItem}>{price}</Text>
      </View>
    ))}
  </View>
);

MenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
