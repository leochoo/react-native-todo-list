import React, { useState } from "react";
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

const TodoList = () => {
  const data: TodoType[] = [
    {
      id: 1,
      text: "Nullam varius.",
      isComplete: true,
    },
    {
      id: 2,
      text: "Phasellus in felis.",
      isComplete: false,
    },
    {
      id: 3,
      text: "In eleifend quam a odio.",
      isComplete: false,
    },
    {
      id: 4,
      text: "Proin interdum mauris non ligula pellentesque ultrices.",
      isComplete: false,
    },
    {
      id: 5,
      text: "Nullam molestie nibh in lectus.",
      isComplete: true,
    },
    {
      id: 6,
      text: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      isComplete: true,
    },
    {
      id: 7,
      text: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      isComplete: true,
    },
    {
      id: 8,
      text: "Nullam sit amet turpis elementum ligula vehicula consequat.",
      isComplete: false,
    },
    {
      id: 9,
      text: "In hac habitasse platea dictumst.",
      isComplete: true,
    },
    {
      id: 10,
      text: "Vivamus vestibulum sagittis sapien.",
      isComplete: false,
    },
  ];
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const renderTodoItem: ListRenderItem<TodoType> = ({ item }) => (
    <TodoItem item={item} />
  );
  return <FlatList data={data} renderItem={renderTodoItem}></FlatList>;
};

export default TodoList;
