import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { user } from '~/assets/data';

const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
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
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
