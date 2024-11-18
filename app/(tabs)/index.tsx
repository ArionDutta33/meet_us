import axios from 'axios';
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, Pressable, ToastAndroid } from 'react-native';

import EventItem from '~/components/EventItem';
type Event = {
  _id: string;
  name: string;
  title: string;
  description: string;
  location: {
    type: string;
    coordinates: number[];
  };
  address: string;
  date: string;
  event_date: string;
  max_attendees: number;
  status: string;
  cover_photo_url: string;
  created_at: string;
  updated_at: string;
  photos: string[];
};
const FeedScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const getMeetUps = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API}/meetus`);
      console.log('data log', JSON.stringify(response.data, null, 2));
      // console.log(JSON.stringify(response, null, 2));
      setEvents(response.data);
      ToastAndroid.show('Events fetched successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  const onRefresh = async () => {
    setRefreshing(true); // Show the refreshing spinner
    await getMeetUps(); // Fetch the latest events
    setRefreshing(false); // Hide the refreshing spinner
  };
  useEffect(() => {
    getMeetUps();
  }, []);

  return (
    <View>
      <FlatList
        data={events}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => <EventItem event={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default FeedScreen;
