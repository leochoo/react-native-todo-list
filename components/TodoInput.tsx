import React, { useState, useRef } from "react";
import { Input, Text, Box, Button, Center } from "native-base";

const TodoInput = ({ createTodo }: { createTodo: (text: string) => void }) => {
  // useref text input
  const inputRef = useRef<HTMLInputElement>();

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
        <Button onPress={() => createTodo(inputRef.current!.value)}>Add</Button>
      }
    />
  );
};

export default TodoInput;
