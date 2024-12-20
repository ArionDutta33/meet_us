import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import { useAuth } from '~/context/AuthProvider';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [attendees, setAttendees] = useState(0);
  const [showPicker, setShowPicker] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  // !!fix later api calls
  //get the authenticateduser
  const { token, user } = useAuth();
  //get geocoding data

  //handle submission
  const handleSubmit = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const data = await axios.post(
        `${process.env.EXPO_PUBLIC_API}/meetus`,
        {
          title,
          description,
          location,
          eventDate: date,
          maxAttendees: attendees,
          status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      );
      if (data.status === 201) {
        setLoading(false);
        console.log(data);
        ToastAndroid.show('Event created successfully', ToastAndroid.LONG);
      } else {
        setLoading(false);
        ToastAndroid.show('Failed to create event', ToastAndroid.SHORT);
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      ToastAndroid.show(`${error}`, ToastAndroid.SHORT);
    }
  };

  // Toggle the visibility of the date picker
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  // Handle changes in the date picker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    // If 'set', update the date and format it for display
    if (event.type === 'set') {
      setDate(currentDate);
      setEventDate(currentDate.toDateString()); // For Android, you can directly set it as well
      if (Platform.OS === 'android') {
        setShowPicker(false); // Hide picker after selecting
      }
    } else {
      // If 'dismissed', hide the picker
      setShowPicker(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="flex-grow p-4" keyboardShouldPersistTaps="handled">
          {/* Event Title Input */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">Title</Text>
            <TextInput
              onChangeText={setTitle}
              value={title}
              placeholder="Enter the event title"
              className="border-b border-gray-400 py-2"
            />
          </View>

          {/* Event Description Input */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">Description</Text>
            <TextInput
              onChangeText={setDescription}
              value={description}
              placeholder="Enter the event details"
              className="border-b border-gray-400 py-2"
            />
          </View>

          {/* Event Location Input */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">Location</Text>
            <TextInput
              onChangeText={setLocation}
              value={location}
              placeholder="Kindly enter the complete address"
              className="border-b border-gray-400 py-2"
            />
          </View>

          {/* Photos Input */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">Photos</Text>
            <TextInput placeholder="Add photos" className="border-b border-gray-400 py-2" />
          </View>

          {/* Date Selection */}
          <View className="mb-4">
            {showPicker && (
              <DateTimePicker value={date} mode="date" display="spinner" onChange={onChange} />
            )}
            {!showPicker && (
              <Pressable onPress={toggleDatePicker} className="border-b border-gray-400 py-2">
                <Text className="text-lg">Select a date</Text>
                <TextInput
                  editable={false}
                  placeholder="Sat 21 Aug 2024"
                  value={eventDate}
                  className="mt-2 text-lg text-gray-500"
                />
              </Pressable>
            )}
          </View>

          {/* Max Attendees Input */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">What is the max no. of attendees allowed</Text>
            <TextInput
              keyboardType="numeric"
              value={attendees.toString()}
              onChangeText={(text) => {
                // If the text is empty or not a valid number, set the attendees to 0 (or any default value)
                const parsedValue = parseInt(text, 10);

                // If parsed value is a valid number, update the state
                if (!isNaN(parsedValue)) {
                  setAttendees(parsedValue);
                } else {
                  // If the value is not a number, you can decide how to handle it
                  setAttendees(0); // or leave it as an empty string
                }
              }}
              placeholder="3"
              className="border-b border-gray-400 py-2"
            />
          </View>

          {/* Status Picker */}
          <View className="mb-4">
            <Text className="text-lg font-semibold">Status</Text>
            <Picker
              mode="dropdown"
              selectedValue={status}
              onValueChange={(itemValue) => setStatus(itemValue)}>
              <Picker.Item label="Active" value="active" />
              <Picker.Item label="Cancelled" value="cancelled" />
            </Picker>
          </View>

          {/* Create Button */}
          <Pressable
            onPress={handleSubmit}
            className="mb-12 mt-4 items-center justify-center rounded-2xl bg-orange-500 py-3">
            <Text className="text-xl font-bold text-white">Create</Text>
          </Pressable>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Create;

//*og
