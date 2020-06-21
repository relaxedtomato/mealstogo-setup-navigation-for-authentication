import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Home from '~/assets/icons/home.svg';
import Search from '~/assets/icons/search.svg';
import Profile from '~/assets/icons/profile.svg';
import { Colors, Spacing, Typography } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Spacing.medium,
    paddingLeft: Spacing.medium,
    borderTopWidth: 2,
    borderTopColor: Colors.lightGray,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    color: Colors.mediumGray,
    fontSize: Typography.baseFontSize,
  },
});

const ICON_DIMENSIONS = {
  width: 32,
  height: 32,
};

const Icon = ({ icon, label }) => (
  <View style={styles.iconContainer}>
    {icon}
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
};

Icon.defaultProps = {
  label: '',
};

const BottomNavigation = () => {
  const { width, height } = ICON_DIMENSIONS;
  return (
    <View style={styles.container}>
      <Icon icon={<Home width={width} height={height} />} label="Home" />
      <Icon icon={<Search width={width} height={height} />} label="Search" />
      <Icon icon={<Profile width={width} height={height} />} label="Profile" />
    </View>
  );
};

export default BottomNavigation;
