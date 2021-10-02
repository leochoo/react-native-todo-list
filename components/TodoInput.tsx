import React, { useState } from "react";
import { Input, Text, Box, Button, Center } from "native-base";

const TodoInput = () => {
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
      InputRightElement={<Button>Add</Button>}
    />
  );
};

export default TodoInput;
