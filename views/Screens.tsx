import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TodoDetails from "./TodoDetails";
import Home from "./Home";
import EditList from "./EditList";
import Colors from "../lib/Colors";
import Settings from "./Settings";

type Props = {};

type RootStackParamList = {
  Home: undefined;
  Details: { title: string; color: string };
  Edit: { title: string; color: string };
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Screens = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="Details"
        component={TodoDetails}
        options={({ route }) => {
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: route.params.color,
            },
            headerTintColor: Colors.white,
          };
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditList}
        options={({ route }) => {
          return {
            title: route.params.title
              ? `Edit ${route.params.title}`
              : "Create New Group",
            headerStyle: {
              backgroundColor: route.params.color || Colors.white,
            },
            headerTintColor: route.params.title ? Colors.white : Colors.dark,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
