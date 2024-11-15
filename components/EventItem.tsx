import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';

import { eventType } from '~/assets/data';
const EventItem = ({ event }: { event: eventType }) => {
  return (
    <View className="m-4 overflow-hidden rounded-2xl border border-gray-300 ">
      <Image
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
        source={{
          uri: event.image,
        }}
      />
      <View className=" p-4">
        <Text className="text-xl font-bold">{event.title}</Text>
        <Text className="font-semibold">{`${new Date(event.date).toDateString()}`}</Text>
        <View>
          <Text className="fontmedium">{event.location.address}</Text>
        </View>
      </View>
    </View>
  );
};

export default EventItem;
