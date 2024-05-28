import { Button } from "@radix-ui/themes";
import styles from "./SubmitButton.module.scss";
import { useFormStatus } from "react-dom";
import { AuthAction } from "./models";

type Props = {
  authAction: AuthAction;
};

export const SubmitButton: React.FC<Props> = ({ authAction }) => {
  const buttonText = authAction === "login" ? "Login" : "Sign up";
  const { pending } = useFormStatus();

  return (
    <Button
      variant="soft"
      type="submit"
      className={styles.button}
      loading={pending}
      data-loading={pending}
    >
      {buttonText}
    </Button>
  );
};
