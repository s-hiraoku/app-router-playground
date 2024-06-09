import { memo } from "react";
import styles from "./ErrorMessages.module.scss";

type Props = {
  errors: string[];
  id?: string;
  ariaDescribedby?: string;
  role?: string;
};

const ErrorMessagesComponent = ({
  errors,
  id,
  ariaDescribedby,
  role = "alert",
}: Props) => {
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
};

ErrorMessagesComponent.displayName = "ErrorMessages";

export const ErrorMessages = memo(ErrorMessagesComponent);

type ErrorMessageProps = {
  message: string;
};

const ErrorMessageComponent = ({ message }: ErrorMessageProps) => (
  <div className={styles.errorMessage}>{message}</div>
);

ErrorMessageComponent.displayName = "ErrorMessage";

export const ErrorMessage = memo(ErrorMessageComponent);
