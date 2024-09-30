import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import WelcomeTab from "./components/WelcomeTab";
import CategoriesTab from "./components/CategoriesTab";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Welcome') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Contacts') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Welcome" component={WelcomeTab} options={{ headerShown: false }} />
    <Tab.Screen name="Contacts" component={CategoriesTab} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            header: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}