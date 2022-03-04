import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Colors from "../lib/Colors";
import TodoItem from "../components/TodoItem";
import { TodoType } from "../lib/Types";
import AddButton from "../components/AddButton";

interface Props {
  title: string;
  navigation: any;
}

const TodoDetails = ({ title, navigation }: Props) => {
  const [todoItems, setTodoItems] = React.useState<TodoType[]>([
    { id: 1, todo: "todo 1", completed: false },
  ]);
  const addTodoItem = (item: TodoType) => {
    todoItems.push(item);
    setTodoItems([...todoItems]);
  };

  const removeTodoItem = (itemId: number) => {
    todoItems.splice(
      // @ts-ignore
      todoItems.indexOf(todoItems.find((item) => item.id === itemId)),
      1
    );
    setTodoItems([...todoItems]);
  };

  const updateTodoItem = (itemId: number, todo: TodoType) => {
    const todoItem: TodoType = todoItems[itemId];
    todoItem.todo = todo.todo;
    setTodoItems([...todoItems]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton
          onPress={() =>
            addTodoItem({
              id: todoItems[todoItems.length - 1].id + 1,
              todo: "",
              completed: false,
              isNewItem: true,
            })
          }
        />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={todoItems}
        renderItem={({ item, index }) => {
          return (
            <TodoItem
              key={index as number}
              item={item}
              removeTodoItem={removeTodoItem}
              onCompleted={() => {
                todoItems[index].completed = !todoItems[index].completed;
                setTodoItems([...todoItems]);
              }}
              onChangeText={(todoText: string) => {
                const todoItem: TodoType = todoItems[index];
                todoItem.todo = todoText;
                setTodoItems([...todoItems]);
              }}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default TodoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  icon: {
    padding: 5,
    fontSize: 32,
    color: Colors.primary,
  },
});
