import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';

import { user } from '~/assets/data';
import SwipperEvent from '~/components/SwipperEvent';

const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 ">
      <View className="relative my-4 items-center  ">
        <Image
          className=" rounded-2xl"
          style={{ width: 300, height: 200 }}
          source={{ uri: user.user.cover_photo_url }}
        />
        <Image
          className="absolute bottom-[-50] rounded-full"
          style={{ width: 100, height: 100 }}
          source={{ uri: user.user.profile_picture_url }}
        />
        <AntDesign
          name="camera"
          size={24}
          color="white"
          className="absolute bottom-[20] left-[60]"
        />
      </View>
      <View className="mt-12 ">
        <Text className="text-center font-bold text-blue-500">Change Profile</Text>
      </View>
      <View className="  ">
        <Text className="py-2 text-center text-sm">{user.user.location}</Text>
      </View>
      <View className="mx-4 gap-4  ">
        <Text>Name</Text>
        <TextInput
          value={user.user.full_name}
          placeholder="Enter your name"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 my-4 gap-4  ">
        <Text>Bio</Text>
        <TextInput
          value={user.user.bio}
          multiline
          numberOfLines={3}
          placeholder="Enter your bio"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 gap-4  ">
        <Text>Email</Text>
        <TextInput
          value={user.user.email}
          placeholder="Enter your email"
          className="border border-gray-400"
        />
      </View>
      <Pressable className="mx-4 my-6 rounded-lg   bg-blue-500 py-4 ">
        <Text className="text-center font-bold text-white">Update Profile</Text>
      </Pressable>
      <View className="mx-4 my-6  h-72 gap-4  ">
        <Text>Events Organised</Text>
        <Swiper className=" ">
          {user.events.map((event) => (
            <SwipperEvent events={event} />
          ))}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
