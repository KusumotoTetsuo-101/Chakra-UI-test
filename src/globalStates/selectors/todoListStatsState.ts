import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";

export const todoListStatsState = selector<number>({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const incompleteTaskCount = todoList.filter(
      (item) => !item.isComplete
    ).length;
    return incompleteTaskCount;
  },
});
