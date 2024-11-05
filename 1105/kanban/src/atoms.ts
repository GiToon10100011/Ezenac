import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoAtom {
  [key: string]: ITodo[];
}

export const todoAtom = atom<ITodoAtom>({
  key: "todo",
  default: {
    todo: [
      { id: 1, text: "염동훈바보" },
      { id: 2, text: "이승연바보" },
      { id: 3, text: "정보경바보" },
    ],
    doing: [],
    done: [],
  },
});
