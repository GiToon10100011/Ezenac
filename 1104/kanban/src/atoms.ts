import { atom, selector } from "recoil";

interface ITodoAtom {
  [key: string]: string[];
}

export const todoAtom = atom<ITodoAtom>({
  key: "todo",
  default: {
    todo: ["염동훈바보", "이승연바보", "김준영바보"],
    doing: ["박제한바보", "백준혁바보", "해오름바보"],
    done: ["송채영바보", "박예림바보", "정보경바보"],
  },
});
