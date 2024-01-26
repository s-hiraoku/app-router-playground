export * from "./radix-ui";

export type DarkMode = "dark" | "light";
export const DARK_MODE = {
  DARK: "dark",
  LIGHT: "light",
} as const satisfies { [key: string]: DarkMode };
