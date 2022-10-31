import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/home';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen() {
  return (
      <Home/>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Calculator') {
              iconName = focused
                ? 'ios-calculator'
                : 'ios-calculator-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-time' : 'ios-timer-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',
        })}
      >
        <Tab.Screen name="Calculator" component={HomeScreen} />
        <Tab.Screen name="History" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/home';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen() {
  return (
      <Home/>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Calculator') {
              iconName = focused
                ? 'ios-calculator'
                : 'ios-calculator-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-time' : 'ios-timer-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',
        })}
      >
        <Tab.Screen name="Calculator" component={HomeScreen} />
        <Tab.Screen name="History" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

