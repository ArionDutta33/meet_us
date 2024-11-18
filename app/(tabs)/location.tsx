import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Callout, Marker, Polygon } from 'react-native-maps';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  let text = 'Waiting for permission or location...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.latitude}, Longitude: ${location.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>

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
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
          <Marker
            style={{ width: 50, height: 50, backgroundColor: 'red' }}
            className="bg-red-500 text-red-700"
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            pinColor="blue">
            <Callout
              onPress={() => console.log('Callout pressed')}
              style={{ backgroundColor: 'white', padding: 10, height: 100, width: 100 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                }}>
                <Text>Test</Text>
              </View>
            </Callout>
          </Marker>
          <Polygon
            strokeColor="red"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={2}
            coordinates={[{ latitude: 51.509865, longitude: -0.118092 }]}
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
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
