import { atom } from "recoil";

export type TaskType = {
  id: number;
  title: string;
  isComplete: boolean;
};

export type InputTaskType = TaskType[];

export const todoListState = atom<InputTaskType>({
  key: "todoListState",
  default: [
    // {
    //   id: 0,
    //   title: "メール送信",
    //   isComplete: false,
    // },
  ],
});
