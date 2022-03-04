import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../lib/Colors";
import { TodoGroupType } from "../lib/Types";
import ColorSelector from "./ColorSelector";

type Props = {
  group: TodoGroupType;
  navigation: any;
  removeTodoItem: (itemId: number) => void;
  // updateTodoItem: (itemId: number, item: TodoGroupType) => void;
  onOptions: () => void;
  index: number;
};

const Todo = (
  { group, navigation, removeTodoItem, onOptions, index }: Props,
  props: Props
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          title: group.title,
          color: group.color,
        });
      }}
      style={[styles.itemContainer, { backgroundColor: group.color }]}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{group.title}</Text>
      </View>
      <View style={styles.itemOptions}>
        <TouchableOpacity onPress={onOptions}>
          <Ionicons
            name="options-outline"
            size={24}
            color={Colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTodoItem(group.id)}>
          <Ionicons
            name="trash-outline"
            size={24}
            color={Colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
    zIndex: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemOptions: {
    flexDirection: "row",
  },
  icon: {
    paddingHorizontal: 5,
  },
});

export default Todo;
