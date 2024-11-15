import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'orange', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarShowLabel: false, // Optionally hide labels
        // tabBarStyle: {
        //   backgroundColor: 'white',
        //   marginBottom: 20,
        //   marginHorizontal: 20,
        //   borderRadius: 20,
        // },
      }}>
      <Tabs.Screen
        name="index" // This corresponds to app/index.js or app/index/index.js
        options={{
          title: 'Home', // Title shown in the tab bar
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="create" // This corresponds to app/create.js or app/create/index.js
        options={{
          title: 'New', // Title shown in the tab bar
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="location" // This corresponds to app/location.js or app/location/index.js
        options={{
          title: 'Locate', // Title shown in the tab bar
          tabBarIcon: ({ color }) => <TabBarIcon name="map" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
