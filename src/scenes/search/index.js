import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TextInput } from 'react-native';
import { Colors, Typography, Spacing } from '~/styles';
import { TOP_BAR_HEIGHT } from '~/utils/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  textInput: {
    ...Typography.bodyText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.mediumGray,
    color: Colors.darkGray,
    height: TOP_BAR_HEIGHT,
    paddingLeft: Spacing.medium,
    paddingVertical: Spacing.medium,
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
    </SafeAreaView>
  );
};

export default Search;
