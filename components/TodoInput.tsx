import React, { useState, useRef } from "react";
import { Input, Text, Box, Button, Center } from "native-base";
import TodoType from "../types/TodoType.types";

const TodoInput = ({ createTodo }: { createTodo: (text: string) => void }) => {
  // useref text input
  const todoText = useRef<HTMLInputElement>();

  // Events
  const addTodo() => {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem("todos", JSON.stringify(next));
  }

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
      ref={inputRef}
      InputRightElement={
        <Button onPress={addTodo}>Add</Button>
      }
    />
  );
};

export default TodoInput;
