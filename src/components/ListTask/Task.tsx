import React from "react";
import { TaskType } from "../../globalStates/atoms/todoListState";
import { useRecoilState } from "recoil";
import { todoListState } from "../../globalStates/atoms/todoListState";
import { Flex, Button, Checkbox } from "@chakra-ui/react";

const Task: React.FC<{ item: TaskType }> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const DeleteItem = (id: number) => {
    const newTodoList = todoList.filter((listItem) => listItem.id !== id);
    setTodoList(newTodoList);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    const updatedTodoList = todoList.map((task) =>
      task.id === item.id ? { ...task, isComplete: isChecked } : task
    );

    setTodoList(updatedTodoList);
  };

  console.log(todoList);

  return (
    <Flex align={"center"} my={4} columnGap={2}>
      <Checkbox onChange={handleCheckboxChange}>{item.title}</Checkbox>
      <Button
        onClick={() => {
          DeleteItem(item.id);
        }}
      >
        削除
      </Button>
    </Flex>
  );
};

export default Task;
