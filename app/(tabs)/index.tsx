import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native';

import { events } from '~/assets/data';
import EventItem from '~/components/EventItem';

const FeedScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4 flex-1 py-4">
      {events.map((event) => {
        return (
          <Pressable key={event.id} onPress={() => router.push(`/details/${event.id}`)}>
            <EventItem event={event} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default FeedScreen;
