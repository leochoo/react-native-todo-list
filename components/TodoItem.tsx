import React from "react";
import { ListRenderItem, TouchableOpacity } from "react-native";

import {
  Input,
  Text,
  Box,
  Center,
  FlatList,
  VStack,
  HStack,
} from "native-base";

import TodoType from "../types/TodoType.types";

const TodoItem = ({
  item,
  deleteTodo,
}: {
  item: TodoType;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item.id)}>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "gray.600",
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <HStack space={3} justifyContent="space-between">
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {item.id}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.text}
            </Text>
          </VStack>
          <Text
            fontSize="xs"
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            alignSelf="flex-start"
          >
            {item.isComplete}
          </Text>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default TodoItem;
