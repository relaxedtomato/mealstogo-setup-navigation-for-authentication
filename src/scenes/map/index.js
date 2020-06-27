import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import RestaurantData from '~/services/RestaurantData';
import MapMarker from '~/assets/icons/map-marker.svg';
import { Colors, Spacing } from '~/styles';
import RestaurantSelected from './components/RestaurantSelected';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMarker: {},
      markers: RestaurantData.results.map(
        ({ geometry, place_id: placeId, name, cuisine, image, vicinity }) => ({
          coordinate: {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
          },
          color: Colors.lightBlue,
          placeId,
          name,
          cuisine,
          image,
          vicinity,
        })
      ),
    };
  }

  onMapPress(pressedMarker) {
    const { activeMarker, markers } = this.state;
    const updatedMarkers = [...markers];

    if (activeMarker.placeId) {
      const prevMarkerIndex = markers.findIndex(
        ({ placeId }) => activeMarker.placeId === placeId
      );
      updatedMarkers[prevMarkerIndex].color = Colors.lightBlue;
    }

    const markerIndex = markers.findIndex(
      ({ placeId }) => placeId === pressedMarker.placeId
    );
    updatedMarkers[markerIndex].color = Colors.darkBlue;

    this.setState({
      markers: updatedMarkers,
      activeMarker: pressedMarker,
    });
  }

  render() {
    const { activeMarker, markers } = this.state;
    return (
      <View style={styles.container}>
        <MapView initialRegion={region} style={styles.mapStyle}>
          {markers.map(marker => (
            <Marker
              coordinate={marker.coordinate}
              key={marker.placeId}
              onPress={() => this.onMapPress(marker)}
            >
              {/* <TouchableOpacity onPress={() => this.onMapPress(marker)}> */}
              <MapMarker width={32} height={32} fill={marker.color} />
              {/* </TouchableOpacity> */}
            </Marker>
          ))}
        </MapView>
        {activeMarker.placeId ? (
          <RestaurantSelected restaurant={activeMarker} />
        ) : null}
      </View>
    );
  }
}

export default Map;
