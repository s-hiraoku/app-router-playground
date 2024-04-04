import { AuthForm } from "@/app/ui/AuthForm";
import styles from "./page.module.scss";
import { GuestLayout } from "@/app/ui/GuestLayout";

export default function LoginPage() {
  return (
    <GuestLayout>
      <main className={styles.container}>
        <AuthForm authAction="login" />
      </main>
    </GuestLayout>
  );
}
