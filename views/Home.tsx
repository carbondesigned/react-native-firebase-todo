import Colors from "../lib/Colors";
import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TodoGroup from "../components/TodoGroup";
import { TodoGroupType } from "../lib/Types";
import AddButton from "../components/AddButton";

type Props = {
  navigation: any;
};

const Home = ({ navigation }: any, props: Props) => {
  const [list, setList] = useState<TodoGroupType[]>([
    {
      id: 1,
      title: "Todo 1",
      color: Colors.primary,
    },
  ]);

  const addTodoItem = (item: TodoGroupType) => {
    item.id = list[list.length - 1].id + 1;
    setList([...list, item]);
  };

  const removeTodoItem = (itemId: number) => {
    // @ts-ignore
    list.splice(list.indexOf(list.find((item) => item.id === itemId)), 1);
    setList([...list]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <View style={{ paddingHorizontal: 10 }}></View>,
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity
            style={{ paddingHorizontal: 6 }}
            onPress={navigation.navigate("Settings")}
          >
            <Ionicons name="settings" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <AddButton
            onPress={() =>
              navigation.navigate("Edit", { saveChanges: addTodoItem })
            }
          />
        </View>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <TodoGroup
            key={index}
            index={index}
            group={item}
            navigation={navigation}
            removeTodoItem={removeTodoItem}
            // updateTodoItem={updateTodoItem}
            onOptions={() => {
              navigation.navigate("Edit", {
                title: item.title,
                color: item.color,
                saveChanges: (newItem: TodoGroupType) => {
                  list[index] = newItem;
                  setList([...list]);
                },
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default Home;
