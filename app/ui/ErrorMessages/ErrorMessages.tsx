import { memo } from "react";
import styles from "./ErrorMessages.module.scss";

type Props = {
  errors: string[];
};

export const ErrorMessages = memo(({ errors }: Props) => {
  return (
    <div className={styles.errorMessages}>
      {errors.map((error) => (
        <ErrorMessage key={error} message={error} />
      ))}
    </div>
  );
});

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = memo(({ message }: ErrorMessageProps) => (
  <div aria-live="polite" className={styles.errorMessage}>
    {message}
  </div>
));
