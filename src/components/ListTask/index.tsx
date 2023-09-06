import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../globalStates/atoms/todoListState";
import { Flex, UnorderedList, ListItem, Button } from "@chakra-ui/react";

const LintTask: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const DeleteItem = (id: number) => {
    const newTodoList = todoList.filter((listItem) => listItem.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <UnorderedList>
      {todoList.map((item) => (
        <Flex align={"center"} my={4} columnGap={2}>
          <ListItem key={item.id}>{item.title}</ListItem>
          <Button
            onClick={() => {
              DeleteItem(item.id);
            }}
          >
            削除
          </Button>
        </Flex>
      ))}
    </UnorderedList>
  );
};

export default LintTask;
