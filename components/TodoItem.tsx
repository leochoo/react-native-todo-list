import React from "react";
import {
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  TouchableHighlight,
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

import TodoType from "../types/TodoType.types";

const TodoItem = ({
  item,
  deleteTodo,
}: {
  item: TodoType;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <TouchableHighlight
      style={styles.rowFront}
      underlayColor={"#AAA"}
      onPress={() => deleteTodo(item.id)}
    >
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
    </TouchableHighlight>
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
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // borderColor: "red",
    borderWidth: 1,
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

export default TodoItem;
