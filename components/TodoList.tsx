import React, { useState, useEffect } from "react";
import { ListRenderItem } from "react-native";
import {
  Input,
  Text,
  Box,
  Center,
  FlatList,
  VStack,
  HStack,
} from "native-base";

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
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={renderTodoItem}
      ></FlatList>
    </>
  );
};

export default TodoList;
