import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TopBar from '~/components/TopBar';
import RestaurantList from './components/RestaurantList';
import { Colors } from '~/styles';
import { TAB_BAR_HEIGHT } from '~/utils/constants';
import { navigationPropTypes } from '~/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    height: TAB_BAR_HEIGHT,
    // Note: only works on Android
    marginTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
});

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TopBar openMap={() => navigation.navigate('MapModal')} />
      </View>
      <View style={styles.content}>
        <RestaurantList />
      </View>
    </SafeAreaView>
  );
}

Home.propTypes = {
  navigation: navigationPropTypes.isRequired,
};
