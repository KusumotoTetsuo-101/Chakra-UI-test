import React from "react";
import Task from "./Task";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../globalStates/atoms/todoListState";
import { UnorderedList } from "@chakra-ui/react";

const LintTask: React.FC = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <UnorderedList>
        {todoList
          .filter((item) => item.isComplete)
          .map((item) => (
            <Task key={item.id} item={item} />
          ))}
      </UnorderedList>
    </>
  );
};

export default LintTask;
