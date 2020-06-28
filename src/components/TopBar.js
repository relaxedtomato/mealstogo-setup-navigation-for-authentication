import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Map from '~/assets/icons/map';
import { Colors, Spacing, Typography } from '~/styles';
import { ICON_DIMENSIONS } from '~/utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: Spacing.medium,
    paddingLeft: Spacing.medium,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  location: Typography.bodyText,
});

const TopBar = ({ openMap }) => (
  <View style={styles.container}>
    <Text style={styles.location}>Silicon Valley</Text>
    <TouchableOpacity onPress={openMap}>
      <Map width={ICON_DIMENSIONS.width} height={ICON_DIMENSIONS.height} />
    </TouchableOpacity>
  </View>
);

TopBar.propTypes = {
  openMap: PropTypes.func.isRequired,
};

export default TopBar;
