import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/HomeScreen';
import { TasksScreen } from './src/screens/TasksScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { ChatScreen } from './src/screens/ChatScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { Home, CheckSquare, Calendar, MessageCircle, Settings } from 'lucide-react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Home size={size} color={color} />;
            } else if (route.name === 'Tasks') {
              return <CheckSquare size={size} color={color} />;
            } else if (route.name === 'Calendar') {
              return <Calendar size={size} color={color} />;
            } else if (route.name === 'Chat') {
              return <MessageCircle size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <Settings size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#58A6FF',
          tabBarInactiveTintColor: '#8B949E',
          headerStyle: {
            backgroundColor: '#0D1117',
          },
          headerTintColor: '#F0F6FC',
          tabBarStyle: {
            backgroundColor: '#161B22',
            borderTopColor: '#30363D',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
