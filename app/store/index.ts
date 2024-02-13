import { atomWithToggle, getPrefersDarkMode } from "./utils";

const prefersDarkMode = getPrefersDarkMode();
export const isDarkModeAtom = atomWithToggle(prefersDarkMode);
