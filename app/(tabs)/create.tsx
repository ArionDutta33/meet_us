import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Create = () => {
  return (
    <View className="flex-1 border">
      <View className="border">
        <Text>Title</Text>
        <TextInput placeholder="Enter the event title" />
      </View>
      <View className="border">
        <Text>Description</Text>
        <TextInput placeholder="Enter the event details" />
      </View>
      <View className="border">
        <Text>Location</Text>
        <TextInput placeholder="Enter full event details" />
      </View>
    </View>
  );
};

export default Create;
