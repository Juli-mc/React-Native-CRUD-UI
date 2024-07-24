import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import CreateUser from "./CreateUser";
import { Trash, UserPlus, UserSearch } from "@tamagui/lucide-icons";

export default function DefaultScreen() {
  const Tab = createBottomTabNavigator();
  //Contains the home app screen with tab navigation screens.
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Users",
          tabBarIcon: ({ color, size }) => (
            <UserSearch size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          tabBarLabel: "Add user",
          tabBarIcon: ({ color, size }) => (
            <UserPlus size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
