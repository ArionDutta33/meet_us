import moment from 'moment';
import React from 'react';
import { View, Text, Image } from 'react-native';
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
const EventItem = ({ event }: { event: Event }) => {
  return (
    <View className="m-4 overflow-hidden rounded-2xl border border-gray-300 ">
      <Image
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
        source={{
          uri: event.photos[0],
        }}
      />
      <View className=" p-4">
        <Text className="text-xl font-bold">{event.title}</Text>
        <Text className="font-semibold">{`${moment(event.event_date).format('MMMM Do YYYY, h:mm a')}`}</Text>
        <View>
          <Text className="fontmedium">{event.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default EventItem;
