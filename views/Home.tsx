import Colors from "../lib/Colors";
import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Fab from "../components/Fab";
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
    // add an item to the list with an updated id
    item.id = list[list.length - 1].id + 1;
    setList([...list, item]);
    // list.push(item);
    // setList([...list]);
  };

  const removeTodoItem = (itemId: number) => {
    // @ts-ignore
    list.splice(list.indexOf(list.find((item) => item.id === itemId)), 1);
    setList([...list]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          onPress={() =>
            navigation.navigate("Edit", { saveChanges: addTodoItem })
          }
        />
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
