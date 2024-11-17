import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ToastAndroid, ActivityIndicator } from 'react-native';
const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onHandleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      if (email === '' || password === '') {
        setError('All fields are required');
        return;
      }

      const data = await axios.post(`${process.env.EXPO_PUBLIC_API}/login`, {
        email,
        password,
      });
      if (data.status === 200) {
        setEmail('');
        setPassword('');
        setLoading(false);
        console.log(JSON.stringify(data, null, 2));
        await AsyncStorage.setItem(
          '@auth',
          JSON.stringify({ user: data.data.userWithoutPassword, token: data.data.token })
        );
        ToastAndroid.show('Login successful', ToastAndroid.LONG);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const onHandleRegister = async () => {
    setLoading(true);
    if (email === '' || password === '') {
      setError('All fields are required');
      return;
    }
    setError('');
    const data = await axios.post(`${process.env.EXPO_PUBLIC_API}/register`, {
      email,
      password,
    });
    if (data.status === 201) {
      setEmail('');
      setPassword('');
      ToastAndroid.show('Registration successful. Please sign in', ToastAndroid.SHORT);
      setLoading(false);
    }
    try {
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="mx-4 my-2 mt-8 gap-4  ">
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="johndoe@gmail.com"
          className="border border-gray-300"
        />
        {error && <Text className="text-red-500">{error}</Text>}
      </View>
      <View className="mx-4 my-2 gap-4   ">
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          className="border border-gray-300"
        />
        {error && <Text className="text-red-500">{error}</Text>}
      </View>
      <Pressable onPress={onHandleLogin} className="mx-4 my-2 gap-4    bg-red-500 py-2">
        <Text className="text-center text-xl font-bold text-white">Sign In</Text>
      </Pressable>
      <Pressable
        onPress={onHandleRegister}
        className="mx-4 my-2 gap-4    border-2 border-red-500 py-2">
        <Text className="text-center text-xl font-bold">Sign Up</Text>
      </Pressable>
    </>
  );
};

export default Auth;
