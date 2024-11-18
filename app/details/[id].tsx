import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ToastAndroid } from 'react-native';

import { useAuth } from '~/context/AuthProvider';

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

const DetailsScreen = () => {
  const [events, setEvents] = useState<Event>({
    _id: '0',
    name: '',
    title: '',
    description: '',
    address: '',
    location: {
      type: '',
      coordinates: [],
    },
    date: '',
    event_date: '',
    max_attendees: 0,
    status: '',
    cover_photo_url: '',
    created_at: '',
    updated_at: '',
    photos: [],
  });
  const { id } = useLocalSearchParams();
  console.log('console.logging the ids inside the details', id);
  const getSingleEvent = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API}/meetus/${id}`);
      console.log(JSON.stringify(response.data, null, 2));
      console.log(JSON.stringify(response, null, 2));
      setEvents(response.data);

      ToastAndroid.show('Events fetched successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };
  useEffect(() => {
    getSingleEvent();
  }, []);

  return (
    <View className="mx-4 flex-1 py-8">
      <Image
        className=" rounded-xl"
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
        source={{
          uri: events.photos[0],
        }}
      />

      <View className="  p-4">
        <Text className=" text-2xl font-bold">{events.title}</Text>
        <Text className="text-gray-500">{`${moment(events.event_date).format('MMMM Do YYYY, h:mm a')}`}</Text>
        <Text className="text-gray-500">100 attendees</Text>
      </View>
      <View className="p-2">
        <Text className="text-sm font-bold">{events.event_date}</Text>
        <Text className="text-sm font-bold">{events.address}</Text>
      </View>
      <View className="p-4">
        <Text>{events.description}</Text>
      </View>
      <Pressable className="mt-auto items-center justify-center rounded-xl bg-orange-500 py-4">
        <Text className="text-center text-xl font-medium text-white">Request To Join</Text>
      </Pressable>
    </View>
  );
};

export default DetailsScreen;
