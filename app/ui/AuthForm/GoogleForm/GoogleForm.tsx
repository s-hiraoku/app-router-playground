import { Button } from "@radix-ui/themes";
import styles from "./GoogleForm.module.scss";
import Image from "next/image";
import { googleSignIn } from "../actions";

export const GoogleForm: React.FC = () => {
  return (
    <form action={googleSignIn} className={styles.container}>
      <Button variant="outline" className={styles.formButton} size="3">
        <Image src="/google.svg" alt="Google" width="24" height="24" />
        google
      </Button>
    </form>
  );
};
