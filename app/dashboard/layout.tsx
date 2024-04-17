import styles from "./layout.module.scss";
import { Sidebar } from "@/app/ui/Sidebar";
import { Header } from "@/app/ui/Header";
import { Flex } from "@radix-ui/themes";
import { SidebarProvider } from "@/app/ui/Sidebar";
import { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <div className={styles.container}>
      <SidebarProvider>
        <Sidebar items={[]} />
      </SidebarProvider>
      <Flex direction="column" flexGrow="1">
        <Header user={user} />
        <main className={styles.mainContent}>{children}</main>
      </Flex>
    </div>
  );
}
