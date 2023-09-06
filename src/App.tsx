import React, { useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import CompleteListTask from "./components/CompleteListTask";
import StatsTask from "./components/StatsTask";
import CompleteStatsTask from "./components/CompleteStatsTask";
import { Box } from "@chakra-ui/react";

// ローカルストレージ対応
import { useRecoilState } from "recoil";
import { todoListState } from "./globalStates/atoms/todoListState";

function App() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList && todoList.length === 0) {
      setTodoList(JSON.parse(storedTodoList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // ローカルストレージに todoList を保存
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Box maxW={"5xl"} py={6} px={4} mx={"auto"}>
      <Box>
        <AddTask />
      </Box>
      <Box mt={10} px={2}>
        <StatsTask />
        <ListTask />
      </Box>
      <Box mt={10} px={2}>
        <CompleteStatsTask />
        <CompleteListTask />
      </Box>
    </Box>
  );
}

export default App;
