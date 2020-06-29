import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '~/styles';
import { TOP_BAR_HEIGHT } from '~/utils/constants';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import RestaurantData from '~/services/RestaurantData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: Spacing.small,
  },
});

const Search = () => {
  const [searchText, onChangeText] = useState('Type a cuisine or place name');
  const [restaurants, onUpdateSearchResults] = useState(RestaurantData.results);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        onChangeText={onChangeText}
        searchText={searchText}
        onUpdateSearchResults={onUpdateSearchResults}
        restaurantData={RestaurantData.results}
      />
      <SearchResults restaurants={restaurants} />
    </SafeAreaView>
  );
};

export default Search;
