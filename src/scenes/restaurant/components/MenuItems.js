import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.small,
  },
  item: {
    ...Typography.bodyText,
    fontSize: Typography.mediumFontSize,
  },
});

const MenuItems = ({ items }) => (
  <View>
    {items.map(({ item, price }) => (
      <View style={styles.container} key={item}>
        <Text style={styles.item}>{item}</Text>
        <Text style={styles.item}>{price}</Text>
      </View>
    ))}
  </View>
);

MenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuItems;
