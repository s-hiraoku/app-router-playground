import { memo } from "react";
import styles from "./ErrorMessages.module.scss";

type Props = {
  errors: string[];
  id?: string;
  ariaDescribedby?: string;
  role?: string;
  alignCenter?: boolean;
};

const ErrorMessagesComponent = ({
  errors,
  id,
  ariaDescribedby,
  role = "alert",
  alignCenter,
}: Props) => {
  return (
    <div
      className={styles.errorMessages}
      id={id}
      aria-describedby={ariaDescribedby}
      role={role}
    >
      {errors.map((error) => (
        <ErrorMessage key={error} message={error} alignCenter={alignCenter} />
      ))}
    </div>
  );
};

ErrorMessagesComponent.displayName = "ErrorMessages";

export const ErrorMessages = memo(ErrorMessagesComponent);

type ErrorMessageProps = {
  message: string;
  alignCenter?: boolean;
};

const ErrorMessageComponent = ({
  message,
  alignCenter = false,
}: ErrorMessageProps) => (
  <div className={styles.errorMessage} data-align-center={alignCenter}>
    {message}
  </div>
);

ErrorMessageComponent.displayName = "ErrorMessage";

export const ErrorMessage = memo(ErrorMessageComponent);
