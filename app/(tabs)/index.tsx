import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import { events } from '~/assets/data';
import EventItem from '~/components/EventItem';
const FeedScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="m-4 flex-1  py-4">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ScrollView>
  );
};

export default FeedScreen;
