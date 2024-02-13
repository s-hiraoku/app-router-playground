import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { COLOR_SCHEME_QUERY } from "@/config";
import { DARK_MODE, DarkMode } from "@/types";

export const useSystemDarkMode = (): DarkMode => {
  return useMediaQuery(COLOR_SCHEME_QUERY) ? DARK_MODE.DARK : DARK_MODE.LIGHT;
};
