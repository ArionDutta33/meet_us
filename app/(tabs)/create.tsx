import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, Platform, ScrollView } from 'react-native';
const Create = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [eventDate, setEventDate] = useState('');
  const [status, setStatus] = useState();

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

  return (
    <ScrollView className="flex-1 border p-4">
      {/* Event Title Input */}
      <View className="mb-4 border">
        <Text>Title</Text>
        <TextInput
          placeholder="Enter the event title"
          style={{ borderBottomWidth: 1, padding: 8 }}
        />
      </View>

      {/* Event Description Input */}
      <View className="mb-4 border">
        <Text>Description</Text>
        <TextInput
          placeholder="Enter the event details"
          style={{ borderBottomWidth: 1, padding: 8 }}
        />
      </View>

      {/* Event Location Input */}
      <View className="mb-4 border">
        <Text>Location</Text>
        <TextInput
          placeholder="Enter full event details"
          style={{ borderBottomWidth: 1, padding: 8 }}
        />
      </View>
      <View className="mb-4 border">
        <Text>Photos</Text>
        <TextInput placeholder="Add photos" style={{ borderBottomWidth: 1, padding: 8 }} />
      </View>

      {/* Date Selection */}
      <View className="mb-4 border">
        {showPicker && (
          <DateTimePicker value={date} mode="date" display="spinner" onChange={onChange} />
        )}
        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <Text>Select a date</Text>
            <TextInput
              editable={false}
              placeholder="Sat 21 Aug 2024"
              value={eventDate}
              style={{ marginTop: 5, fontSize: 16, color: eventDate ? 'black' : 'gray' }}
            />
          </Pressable>
        )}
      </View>
      <View className="mb-4 border">
        <Text>What is the max no. of attendees allowed</Text>
        <TextInput placeholder="3" />
      </View>
      <View className="mb-4 border">
        <Text>Status</Text>
        <Picker
          mode="dropdown"
          selectedValue={status}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}>
          <Picker.Item label="Active" value="active" />
          <Picker.Item label="Cancelled" value="cancelled" />
        </Picker>
      </View>
      <Pressable className="mt-4 items-center justify-center rounded-2xl bg-orange-500 py-3">
        <Text className="text-center text-xl font-bold text-white">Create</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Create;
