import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'orange', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 20,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />, // Use the color prop here
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Tab Create',
          tabBarIcon: ({ color }) => <AntDesign name="plus" size={20} color={color} />, // Use the color prop here
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" size={20} color={color} />, // Use the color prop here
        }}
      />
    </Tabs>
  );
}
