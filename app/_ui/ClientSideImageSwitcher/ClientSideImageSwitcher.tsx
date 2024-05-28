"use client";

import Image from "next/image";
import { isDarkModeAtom } from "@/app/store";
import { useAtomValue } from "jotai";

type Props = {
  srcLight: string;
  srcDark: string;
  alt: string;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export const ClientSideImageSwitcher: React.FC<Props> = ({
  srcLight,
  srcDark,
  alt,
  ...props
}) => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

  const src = isDarkMode ? srcDark : srcLight;

  return <Image {...props} src={src} alt={alt} />;
};
