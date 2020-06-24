import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const region = {
  latitude: 37.773972,
  longitude: -122.431297,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0922 * ASPECT_RATIO,
};

const Map = () => (
  <View style={styles.container}>
    <MapView initialRegion={region} style={styles.mapStyle} />
  </View>
);

export default Map;
