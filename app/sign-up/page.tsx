import { LoginForm } from "@/app/ui/LoginForm";
import styles from "./page.module.scss";
import { GuestLayout } from "../ui/GuestLayout";

export default function LoginPage() {
  return (
    <GuestLayout>
      <main className={styles.container}></main>
    </GuestLayout>
  );
}
