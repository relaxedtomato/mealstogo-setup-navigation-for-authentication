import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Colors, Typography, Spacing } from '~/styles';
import { TOP_BAR_HEIGHT } from '~/utils/constants';
import CancelIcon from '~/assets/icons/cancel';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.white,
  },
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
    top: Spacing.large,
  },
});

const Search = () => {
  const [searchText, onChangeText] = useState('Type a cuisine or place name');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onFocus={() => onChangeText('')}
        onChangeText={onChangeText}
        value={searchText}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => onChangeText('')}
      >
        <CancelIcon width={25} height={25} fill={Colors.mediumGray} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Search;
