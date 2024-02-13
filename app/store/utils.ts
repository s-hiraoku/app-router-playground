import { COLOR_SCHEME_QUERY } from "@/config";
import { atom } from "jotai";

export const atomWithToggle = (initialValue?: boolean) => {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });

  return anAtom;
};

export const getPrefersDarkMode = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia(COLOR_SCHEME_QUERY).matches;
  }
  return false;
};
