import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import RestaurantData from '~/services/RestaurantData';
import MapMarker from '~/assets/icons/map-marker.svg';
import { Colors } from '~/styles';

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

const Map = () => {
  const markers = RestaurantData.results.map(({ geometry }) => ({
    coordinate: {
      latitude: geometry.location.lat,
      longitude: geometry.location.lng,
    },
  }));
  return (
    <View style={styles.container}>
      <MapView initialRegion={region} style={styles.mapStyle}>
        {markers.map(({ coordinate }) => (
          <Marker coordinate={coordinate}>
            <MapMarker width={32} height={32} fill={Colors.lightBlue} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;
