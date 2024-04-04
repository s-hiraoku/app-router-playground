import styles from "./layout.module.scss";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/ui/ErrorFallback";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Flex direction="column" grow="1">
          <main className={styles.mainContent}>{children}</main>
        </Flex>
      </ErrorBoundary>
    </div>
  );
}
