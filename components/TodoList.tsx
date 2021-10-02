import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodoList;
