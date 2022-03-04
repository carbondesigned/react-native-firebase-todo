import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./views/Home";
import TodoDetails from "./views/TodoDetails";
import Colors from "./lib/Colors";
import EditList from "./views/EditList";

type RootStackParamList = {
  Home: undefined;
  Details: { title: string; color: string };
  Edit: { title: string; color: string };
};
const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
