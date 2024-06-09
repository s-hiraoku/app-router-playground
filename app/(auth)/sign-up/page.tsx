import { AuthForm } from "@/app/_ui/AuthForm";
import styles from "./page.module.scss";

export default function LoginPage(): JSX.Element {
  return (
    <main className={styles.container}>
      <AuthForm authAction="signUp" />
    </main>
  );
}
