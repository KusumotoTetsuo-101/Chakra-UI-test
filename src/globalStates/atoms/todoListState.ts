import { atom } from "recoil";

type Task = {
  id: number;
  title: string;
  isComplete: boolean;
};

type InputTask = Task[];

export const todoListState = atom<InputTask>({
  key: "todoListState",
  default: [
    // {
    //   id: 0,
    //   title: "メール送信",
    //   isComplete: false,
    // },
  ],
});
