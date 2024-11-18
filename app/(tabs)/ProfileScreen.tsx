import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import { useAuth } from '~/context/AuthProvider';

const ProfileScreen = () => {
  const [fullName, setFullName] = useState<string | null>('');
  const [bio, setBio] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string | null>('');
  const [coverPicture, setCoverPicture] = useState<string | null>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { user, token, setToken, setUser } = useAuth();

  // Fetch profile data on mount
  const getProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API}/profile/${user?._id}`, {
        headers: { Authorization: `${token}` },
      });
      const profileData = response.data;
      setFullName(profileData.fullName);
      setBio(profileData.bio);
      setAddress(profileData.address);
      setProfilePicture(profileData.profilePicture);
      setCoverPicture(profileData.coverPicture);
    } catch (error) {
      console.error('Error fetching profile data:', JSON.stringify(error, null, 2));
      ToastAndroid.show('Error fetching profile', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const onUpdateProfile = async () => {
    setLoading(true);
    try {
      const updatedData = await axios.put(
        `${process.env.EXPO_PUBLIC_API}/profile/${user?._id}`,
        {
          fullName,
          bio,
          address,
          coverPicture:
            coverPicture || 'https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg',
          profilePicture: profilePicture || 'https://randomuser.me/api/portraits/women/32.jpg',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      );
      if (updatedData.status === 200) {
        // Update the local state with the new profile data
        const updatedProfile = updatedData.data.updatedUser;
        setFullName(updatedProfile.fullName);
        setBio(updatedProfile.bio);
        setAddress(updatedProfile.address);
        setProfilePicture(updatedProfile.profilePicture);
        setCoverPicture(updatedProfile.coverPicture);
        ToastAndroid.show('Profile updated successfully', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Failed to update profile', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error updating profile:', JSON.stringify(error, null, 2));
      ToastAndroid.show('Error updating profile', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };
  const onSignOut = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('@auth');
      setUser(null);
      setToken('');
      setLoading(false);
    } catch (error) {
      console.error('Error signing out:', JSON.stringify(error, null, 2));
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
      <View className="relative my-4 items-center">
        <Image
          className="rounded-2xl"
          style={{ width: 300, height: 200 }}
          source={{
            uri:
              coverPicture ||
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <Image
          className="absolute bottom-[-50] rounded-full"
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              profilePicture ||
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
      <View className="mt-12">
        <Text className="text-center font-bold text-blue-500">Change Profile</Text>
      </View>
      <View>
        <Text className="py-2 text-center text-sm">{address}</Text>
      </View>
      <View className="mx-4 gap-4">
        <Text>Name</Text>
        <TextInput
          onChangeText={setFullName}
          value={fullName}
          placeholder="Enter your name"
          className="border border-gray-400"
        />
      </View>
      <View className="mx-4 my-4 gap-4">
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
      <View className="mx-4 gap-4">
        <Text>Email</Text>
        <TextInput
          editable={false}
          value={user?.email}
          placeholder="Enter your email"
          className="border border-gray-400 text-gray-500"
        />
      </View>
      <View className="mx-4 my-4 gap-4">
        <Text>Address</Text>
        <TextInput
          onChangeText={setAddress}
          value={address}
          placeholder="Enter your address"
          className="border border-gray-400"
        />
      </View>
      <Pressable onPress={onUpdateProfile} className="mx-4 my-6 rounded-lg bg-blue-500 py-4">
        <Text className="text-center font-bold text-white">Update Profile</Text>
      </Pressable>
      <Pressable onPress={onSignOut} className="mx-4 rounded-lg bg-blue-500 py-4">
        <Text className="text-center font-bold text-white">Sign Out</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProfileScreen;
