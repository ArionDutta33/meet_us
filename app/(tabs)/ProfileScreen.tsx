import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-swiper';

import { user } from '~/assets/data';
import SwipperEvent from '~/components/SwipperEvent';
import { useAuth } from '~/context/AuthProvider';
import { supabase } from '~/lib/supabase';

const ProfileScreen = () => {
  //state values
  const [fullName, setFullName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  //get the authenticated user email
  const { user: authenticatedUser } = useAuth();

  //get user profile
  const getProfile = async () => {
    setLoading(true);
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authenticatedUser?.id)
      .single();
    if (!error) {
      setFullName(profiles.full_name);
      setBio(profiles.bio);
      setAddress(profiles.address);
    }
    setLoading(false);
  };

  //handle profile update
  const onUpdateProfile = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        id: authenticatedUser?.id,
        full_name: fullName,
        bio,
        address,
        cover_image: user.user.cover_photo_url,
      })
      .select();
    if (error) {
      setLoading(false);
      Alert.alert(error.message);
      console.log(error);
    }
    setLoading(false);
    console.log(data);
  };
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 ">
      <View className="relative my-4 items-center  ">
        <Image
          className=" rounded-2xl"
          style={{ width: 300, height: 200 }}
          source={{
            uri:
              user.user.cover_photo_url ||
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <Image
          className="absolute bottom-[-50] rounded-full"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              user.user.profile_photo_url ||
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
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
        <Text className="py-2 text-center text-sm">{address}</Text>
      </View>
      <View className="mx-4 gap-4  ">
        <Text>Name</Text>
        <TextInput
          onChangeText={setFullName}
          value={fullName}
          placeholder="Enter your name"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 my-4 gap-4  ">
        <Text>Bio</Text>
        <TextInput
          onChangeText={setBio}
          value={bio}
          multiline
          numberOfLines={3}
          placeholder="Enter your bio"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 gap-4  ">
        <Text>Email</Text>
        <TextInput
          editable={false}
          value={authenticatedUser?.email}
          placeholder="Enter your email"
          className="border border-gray-400 text-gray-500"
        />
      </View>
      <View className="mx-4 my-4 gap-4  ">
        <Text>Address</Text>
        <TextInput
          onChangeText={setAddress}
          value={address}
          placeholder="Enter your address"
          className="border border-gray-400 text-gray-500"
        />
      </View>
      <Pressable onPress={onUpdateProfile} className="mx-4 my-6 rounded-lg   bg-blue-500 py-4 ">
        <Text className="text-center font-bold text-white">Update Profile</Text>
      </Pressable>
      <View className="mx-4 my-6  h-72 gap-4  ">
        <Text>Events Organised</Text>
        <Swiper className=" ">
          {user.events.map((event, index) => (
            <SwipperEvent key={index} events={event} />
          ))}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
