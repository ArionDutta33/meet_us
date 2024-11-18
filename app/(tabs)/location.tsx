import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ToastAndroid,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import MapView, { Callout, Marker, Overlay, Polygon } from 'react-native-maps';

import { useAuth } from '~/context/AuthProvider';
// type Event = {
//   id: number;
//   name: string;
//   title: string;
//   description: string;
//   location: {
//     type: string;
//     coordinates: number[];
//   };
//   date: string;
//   event_date: string;
//   max_attendees: number;
//   status: string;
//   cover_photo_url: string;
//   created_at: string;
//   updated_at: string;
//   photos: string[];
// };

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { token } = useAuth();
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
    const getMeetUps = async () => {
      try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_API}/meetus`);
        console.log(JSON.stringify(response.data, null, 2));
        console.log(JSON.stringify(response, null, 2));
        setEvents(response.data);
        ToastAndroid.show('Events fetched successfully', ToastAndroid.SHORT);
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    };
    getMeetUps();
  }, []);

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
            pinColor="red"
            title={events[0].title}
            description={events[0].description}
            onPress={() => router.push(`/details/${events[0].id}`)}
            onCalloutPress={() => {
              console.log('Marker pressed');
            }}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          />
          {events.map((event) => (
            <Marker
              className="realative"
              key={event.id}
              title={event.title}
              description={event.description}
              coordinate={{
                latitude: event.location.coordinates[0],
                longitude: event.location.coordinates[1],
              }}
            />
          ))}
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
