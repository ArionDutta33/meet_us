import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { useAuth } from '~/context/AuthProvider';

const OnBoardScreen = () => {
  const { user } = useAuth();
  console.log('user', JSON.stringify(user, null, 2));
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-white">
        <View className="  p-8">
          <Text className="text-4xl font-semibold leading-snug tracking-widest">Welcome to </Text>
          <Text className="text-4xl font-semibold leading-snug tracking-widest">Campus Meet</Text>
        </View>
        <View className="px-10">
          <Text className="py-2 text-sm text-gray-500">Discoer your fellow students meetups </Text>
          <Text className="text-sm text-gray-500">and create your own</Text>
        </View>
        <View className="mt-10 items-center ">
          <Image
            className="rounded-2xl"
            source={{
              uri: 'https://images.pexels.com/photos/3050833/pexels-photo-3050833.jpeg?auto=compress&cs=tinysrgb&w=300',
            }}
            style={{ width: 300, height: 400 }}
          />
        </View>
        <Link href="/(tabs)" asChild>
          <Pressable className="mx-6 mb-6 mt-auto rounded-xl bg-black py-4">
            <Text className="text-center text-white">Get Started</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
};

export default OnBoardScreen;
