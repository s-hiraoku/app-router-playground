"use client";

import Image from "next/image";
import { isDarkModeAtom } from "@/app/store";
import { useAtomValue } from "jotai";

type Props = {
  lightSrc: string;
  darkSrc: string;
} & Omit<React.ComponentProps<typeof Image>, "src">;

export const ClientSideImageSwitcher: React.FC<Props> = ({
  lightSrc,
  darkSrc,
  ...props
}) => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

  const image = isDarkMode ? darkSrc : lightSrc;
  return <Image {...props} src={image} />;
};
