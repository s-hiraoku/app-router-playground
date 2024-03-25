import { memo } from "react";
import styles from "./ErrorMessages.module.scss";

type Props = {
  errors: string[];
  id?: string;
  ariaDescribedby?: string;
  role?: string;
};

export const ErrorMessages = memo(
  ({ errors, id, ariaDescribedby, role = "alert" }: Props) => {
    return (
      <div
        className={styles.errorMessages}
        id={id}
        aria-describedby={ariaDescribedby}
        role={role}
      >
        {errors.map((error) => (
          <ErrorMessage key={error} message={error} />
        ))}
      </div>
    );
  }
);

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = memo(({ message }: ErrorMessageProps) => (
  <div className={styles.errorMessage}>{message}</div>
));
