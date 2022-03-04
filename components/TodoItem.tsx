import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../lib/Colors";
import { TodoType } from "../lib/Types";
import Todo from "./TodoGroup";

type Props = {
  item: TodoType;
  removeTodoItem: (itemId: number) => void;
  onCompleted: () => void;
  onChangeText: (text: string) => void;
};

const TodoItem = (
  { item, removeTodoItem, onCompleted, onChangeText }: Props,
  props: Props
) => {
  const [editMode, setEditMode] = React.useState(item.isNewItem);
  return (
    <View style={[styles.itemContainer, { backgroundColor: Colors.primary }]}>
      <View style={styles.item}>
        <TouchableOpacity onPress={onCompleted} style={styles.completedButton}>
          {item.completed ? (
            <Ionicons
              name="checkmark"
              size={26}
              color={Colors.primary}
              style={[
                styles.icon,
                {
                  backgroundColor: Colors.white,
                  height: 32,
                  width: 32,
                },
              ]}
            />
          ) : (
            <Ionicons
              name="checkmark"
              size={24}
              color={Colors.white}
              style={[styles.icon, { height: 32, width: 32 }]}
            />
          )}
        </TouchableOpacity>
        {item.completed ? (
          <Text
            style={[
              styles.itemText,
              {
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                color: "#c6c6c6",
              },
            ]}
          >
            {item.todo}
          </Text>
        ) : editMode ? (
          <TextInput
            value={item.todo}
            onChangeText={onChangeText}
            placeholder={"Enter todo"}
            onSubmitEditing={() => {}}
            onBlur={() => setEditMode(false)}
            autoFocus
            underlineColorAndroid={"transparent"}
            style={styles.editText}
          />
        ) : (
          <TouchableOpacity onPress={() => setEditMode(true)}>
            <Text style={styles.itemText}>{item.todo}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.itemOptions}>
        <TouchableOpacity>
          <Ionicons
            name="options-outline"
            size={24}
            color={Colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTodoItem(item.id)}>
          <Ionicons
            name="trash-outline"
            size={24}
            color={Colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  completedButton: {
    borderRadius: 999,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  editText: {
    color: Colors.white,
    fontSize: 18,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    width: 200,
  },
});

export default TodoItem;
