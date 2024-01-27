import { atom } from "jotai";

export const atomWithToggle = (initialValue?: boolean) => {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom;
};
