import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import {
  Input,
  Text,
  Box,
  Center,
  FlatList,
  VStack,
  HStack,
} from "native-base";

import { SwipeListView } from "react-native-swipe-list-view";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

import TodoType from "../types/TodoType.types";

import mockTodos from "../mock/mockTodos.json";
import uuid from "react-native-uuid";

const TodoList = () => {
  const data: TodoType[] = mockTodos;
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // load "data" into "todos" on first render
  useEffect(() => {
    setTodos(data);
  }, []);

  const createTodoHandler = (text: string) => {
    const newTodo: TodoType = {
      id: uuid.v4() as string, // this weirdly returns string and number array in v4 so need to cast to string
      text,
      isComplete: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    // setIsAddMode(false);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderTodoItem: ListRenderItem<TodoType> = ({ item }) => (
    <TodoItem item={item} deleteTodo={deleteTodoHandler} />
  );

  return (
    <>
      <TodoInput createTodo={createTodoHandler} />
      <SwipeListView
        useFlatList={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
        renderHiddenItem={(data, rowMap) => (
          <Box style={styles.rowBack}>
            <Text>Left</Text>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => console.log(rowMap, data.item.id)}
            >
              <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => console.log(rowMap, data.item.id)}
            >
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </Box>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        // onRowDidOpen={onRowDidOpen}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
});

export default TodoList;
