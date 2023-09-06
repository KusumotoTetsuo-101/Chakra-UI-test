import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../globalStates/atoms/todoListState";

const AddTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const AddItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: todoList.length + 1,
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  return (
    <Flex columnGap={2}>
      <Input
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={handleChange}
      />
      <Button onClick={AddItem}>Add</Button>
    </Flex>
  );
};

export default AddTask;
