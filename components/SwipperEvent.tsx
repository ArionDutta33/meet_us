import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
type eventType = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  event_date: string;
  location: string;
  max_attendees: number;
  status: string;
  cover_photo_url: string;
  created_at: string;
  updated_at: string;
  rsvp_status: string;
};
const SwipperEvent = ({ events }: { events: eventType }) => {
  return (
    <ImageBackground
      className="items-center justify-center"
      source={{ uri: events.cover_photo_url }}
      style={{ width: '100%', height: '100%' }}>
      <View className="  ">
        <Text className="text-2xl font-bold text-white">{events.title}</Text>
        <View>
          <Text className="text-white">{events.event_date.slice(0, 10)}</Text>
          <Text className="text-white">{events.location}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SwipperEvent;
