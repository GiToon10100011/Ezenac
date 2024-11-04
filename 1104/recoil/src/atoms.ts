import { atom, selector } from "recoil";

export const minuteAtom = atom({
  key: "mins",
  default: 0,
});

export const hourSelector = selector({
  key: "hrs",
  get: ({ get }) => {
    const minutes = get(minuteAtom);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteAtom, minutes);
  },
});
