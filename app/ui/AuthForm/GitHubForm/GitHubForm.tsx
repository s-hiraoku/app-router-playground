import { Button } from "@radix-ui/themes";
import styles from "./GitHubForm.module.scss";
import { ClientSideImageSwitcher } from "@/app/ui/ClientSideImageSwitcher";
import { gitHubSignIn } from "../actions";

export const GitHubForm: React.FC = () => {
  return (
    <form action={gitHubSignIn} className={styles.container}>
      <Button
        variant="outline"
        className={styles.formButton}
        size="3"
        type="submit"
      >
        <ClientSideImageSwitcher
          srcDark="/github-mark-white.svg"
          srcLight="/github-mark.svg"
          alt="Github"
          width="24"
          height="24"
        />
        github
      </Button>
    </form>
  );
};
