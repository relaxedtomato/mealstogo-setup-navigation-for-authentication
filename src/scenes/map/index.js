import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
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

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMarker: {},
      markers: RestaurantData.results.map(
        ({ geometry, place_id: placeId }) => ({
          coordinate: {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
          },
          color: Colors.lightBlue,
          placeId,
        })
      ),
    };
  }

  onMapPress(pressedMarker) {
    const { activeMarker, markers } = this.state;

    if (activeMarker.placeId) {
      const prevMarkerIndex = markers.findIndex(
        ({ placeId }) => activeMarker.placeId === placeId
      );
      markers[prevMarkerIndex].color = Colors.lightBlue;
    }

    const markerIndex = markers.findIndex(
      ({ placeId }) => placeId === pressedMarker.placeId
    );
    markers[markerIndex].color = Colors.darkBlue;

    this.setState({
      markers,
      activeMarker: pressedMarker,
    });
  }

  render() {
    const { markers } = this.state;
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
      </View>
    );
  }
}

export default Map;
