import axios from 'axios';
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, Pressable, ToastAndroid } from 'react-native';

import EventItem from '~/components/EventItem';
type Event = {
  id: string;
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
  useEffect(() => {
    getMeetUps();
  }, []);

  return (
    <View>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`} asChild>
            <Pressable>
              <EventItem event={item} />
            </Pressable>
          </Link>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FeedScreen;
