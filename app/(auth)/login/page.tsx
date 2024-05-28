import { AuthForm } from "@/app/_ui/AuthForm";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <AuthForm authAction="login" />
    </main>
  );
}
