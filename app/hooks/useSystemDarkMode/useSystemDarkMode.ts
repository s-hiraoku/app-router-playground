import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { COLOR_SCHEME_QUERY } from "@/config";
import { DarkModeType } from "@/types";

export const useSystemDarkMode = (): DarkModeType => {
  return useMediaQuery(COLOR_SCHEME_QUERY) ? "dark" : "light";
};
