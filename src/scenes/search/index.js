import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '~/styles';
import { TOP_BAR_HEIGHT } from '~/utils/constants';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import RestaurantData from '~/services/RestaurantData';
import { navigationPropTypes } from '~/types';

const INITIAL_SEARCH_INPUT = 'Type a cuisine or place name';

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

const Search = ({ navigation }) => {
  const [searchText, onChangeText] = useState(INITIAL_SEARCH_INPUT);
  const [restaurants, onUpdateSearchResults] = useState(RestaurantData.results);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      onChangeText(INITIAL_SEARCH_INPUT);
      onUpdateSearchResults(RestaurantData.results);
    });

    return unsubscribe;
  }, [navigation]);

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

Search.propTypes = {
  navigation: navigationPropTypes.isRequired,
};

export default Search;
