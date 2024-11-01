import { atom, selector } from "recoil";

export enum EnumTodoState {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodo {
  id: number;
  content: string;
  state: EnumTodoState;
}

export const todoAtom = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoStateAtom = atom<ITodo["state"]>({
  key: "todoState",
  default: EnumTodoState.TODO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todolist = get(todoAtom);
    const todoState = get(todoStateAtom);
    return todolist.filter((todo) => todo.state === todoState);
  },
});
