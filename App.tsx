import React, { useState } from "react";
import {
  VStack,
  HStack,
  NativeBaseProvider,
  Box,
  Center,
  Button,
} from "native-base";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//`px` here was the shorthand for `paddingX `and it comes from https://docs.nativebase.io/utility-props
export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} paddingX="3" safeAreaTop={16}>
        <VStack space={4} alignItems="center">
          <TodoInput />
          <TodoList />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
