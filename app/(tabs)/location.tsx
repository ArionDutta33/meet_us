import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Callout, Marker, Overlay, Polygon } from 'react-native-maps';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // Request location permission when the component mounts
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Get the current location of the device
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  // let text = 'Waiting for permission or location...';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
  // }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* Place a marker at the device's current location */}
          <Marker
            pinColor="blue"
            title="Your Location"
            description="This is the event info"
            onCalloutPress={() => {
              console.log('Marker pressed');
            }}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
