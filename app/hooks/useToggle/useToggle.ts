import { Dispatch, SetStateAction, useCallback, useState } from "react";

type UseToggleReturnType = [
  value: boolean,
  toggle: () => void,
  setValue: Dispatch<SetStateAction<boolean>>,
];

export const useToggle = (defaultValue?: boolean): UseToggleReturnType => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((prevState) => !prevState), []);

  return [value, toggle, setValue];
};
