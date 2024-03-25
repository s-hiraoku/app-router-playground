import { ComponentType, memo } from "react";

export function withMemo<T>(
  Component: ComponentType<T>,
  propsAreEqual?: (prevProps: T, nextProps: T) => boolean
) {
  return memo(Component, propsAreEqual);
}
