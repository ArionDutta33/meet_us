import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

import { user } from '~/assets/data';

const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 ">
      <View className="relative my-4 items-center border">
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
      <View className=" border">
        <Text className="py-2 text-center text-sm">{user.user.location}</Text>
      </View>
      <View className="mx-4 gap-4 border">
        <Text>Name</Text>
        <TextInput
          value={user.user.full_name}
          placeholder="Enter your name"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 gap-4 border">
        <Text>Bio</Text>
        <TextInput
          value={user.user.bio}
          multiline
          numberOfLines={3}
          placeholder="Enter your bio"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 gap-4 border">
        <Text>Email</Text>
        <TextInput
          value={user.user.email}
          placeholder="Enter your email"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 my-6 border">
        <Text>Password</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
