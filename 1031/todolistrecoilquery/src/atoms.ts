import { atom } from "recoil";

export const todoAtom = atom({
  key: "todo",
  default: [],
});
