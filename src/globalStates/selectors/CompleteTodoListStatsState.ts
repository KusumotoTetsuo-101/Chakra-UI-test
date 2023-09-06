import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";

export const CompleteTodoListStatsState = selector<number>({
  key: "CompleteTodoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const incompleteTaskCount = todoList.filter(
      (item) => item.isComplete
    ).length;
    return incompleteTaskCount;
  },
});
