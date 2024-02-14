import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { COLOR_SCHEME_QUERY } from "@/config";
import { DarkMode } from "@/types";

export const useSystemDarkMode = (): DarkMode => {
  return useMediaQuery(COLOR_SCHEME_QUERY) ? "dark" : "light";
};
