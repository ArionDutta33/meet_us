import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { events } from '~/assets/data';
const singleEvent = events[0];
const DetailsScreen = () => {
  console.log(JSON.stringify(singleEvent, null, 2));
  const { id } = useLocalSearchParams();
  return (
    <View className="mx-4 flex-1 py-8">
      <Image
        className=" rounded-xl"
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
        source={{
          uri: singleEvent.image,
        }}
      />

      <View className="  p-4">
        <Text className=" text-2xl font-bold">{singleEvent.title}</Text>
        <Text className="text-gray-500">{new Date(singleEvent.date).toDateString()}</Text>
        <Text className="text-gray-500">100 attendees</Text>
      </View>
      <View className="p-2">
        <Text className="text-sm font-bold">{singleEvent.location.address}</Text>
        <Text className="text-sm font-bold">{singleEvent.location.name}</Text>
      </View>
      <View className="p-4">
        <Text>{singleEvent.description}</Text>
      </View>
      <Pressable className="mt-auto items-center justify-center rounded-xl bg-orange-500 py-4">
        <Text className="text-center text-xl font-medium text-white">Request To Join</Text>
      </Pressable>
    </View>
  );
};

export default DetailsScreen;
