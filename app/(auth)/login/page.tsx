import { AuthForm } from "@/app/ui/AuthForm";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <AuthForm authAction="login" />
    </main>
  );
}
