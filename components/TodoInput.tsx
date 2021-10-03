import React, { useState, useRef } from "react";
import { Input, Text, Box, Button, Center } from "native-base";
import TodoType from "../types/TodoType.types";

const TodoInput = ({ createTodo }: { createTodo: (text: string) => void }) => {
  const [text, setText] = useState("");

  const createTodoHandler = () => {
    createTodo(text);
    setText("");
  };

  return (
    <Input
      borderWidth={2}
      borderColor="cyan.500"
      variant="outline"
      placeholder="Add your task"
      w={{
        base: "70%",
        md: "25%",
      }}
      m={3}
      value={text}
      onChangeText={(text) => setText(text)}
      InputRightElement={<Button onPress={createTodoHandler}>Add</Button>}
    />
  );
};

export default TodoInput;
