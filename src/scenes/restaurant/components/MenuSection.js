import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import MenuItems from './MenuItems';
import { Colors, Spacing, Typography } from '~/styles';
import ChevronOpen from '~/assets/icons/chevron-open.svg';
import ChevronClose from '~/assets/icons/chevron-close.svg';

const styles = StyleSheet.create({
  menuSectionHeader: {
    ...Typography.sectionHeader,
    marginBottom: Spacing.small,
  },
  menuSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.small,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.mediumGray,
  },
});

const MenuSection = ({ name, items }) => {
  const [isOpen, onOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => onOpen(!isOpen)}>
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionHeader}>{name}</Text>
          {isOpen ? (
            <ChevronClose width={20} height={20} fill={Colors.mediumGray} />
          ) : (
            <ChevronOpen width={20} height={20} fill={Colors.mediumGray} />
          )}
        </View>
      </TouchableOpacity>
      {isOpen && <MenuItems items={items} />}
    </View>
  );
};

MenuSection.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuSection;
