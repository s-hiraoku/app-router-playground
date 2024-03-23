import { Button, Card, Separator, Text, Flex } from "@radix-ui/themes";
import styles from "./LoginForm.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ClientSideImageSwitcher } from "../ClientSideImageSwitcher";

import { CredentialsForm } from "./CredentialsForm";

type Props = {};

export const LoginForm: React.FC<Props> = ({}) => {
  return (
    <div>
      <Flex justify="center" p="4">
        <Text as="div" size="7">
          Login
        </Text>
      </Flex>
      <Card className={styles.container}>
        <Flex
          align="center"
          justify="center"
          width="100%"
          direction="column"
          gap="3"
        >
          <Button variant="outline" className={styles.formButton} size="3">
            <Image src="/google.svg" alt="Google" width="24" height="24" />
            google
          </Button>
          <Button variant="outline" className={styles.formButton} size="3">
            <ClientSideImageSwitcher
              srcDark="/github-mark-white.svg"
              srcLight="/github-mark.svg"
              alt="Github"
              width="24"
              height="24"
            />
            github
          </Button>
          <Flex
            display="flex"
            align="center"
            justify="center"
            gap="3"
            width="100%"
            mt="3"
          >
            <Separator size="4" />
            <Text size="1" color="gray">
              OR
            </Text>
            <Separator size="4" />
          </Flex>
          <CredentialsForm />
          <Text as="div" size="2" mt="2">
            Don't have an account?
            <Link href="/sign-up">
              <Button variant="ghost" ml="2" size="2" className={styles.signUp}>
                Sign up
              </Button>
            </Link>
          </Text>
        </Flex>
      </Card>
    </div>
  );
};
