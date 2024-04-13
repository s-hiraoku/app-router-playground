import { Button, Card, Separator, Text, Flex } from "@radix-ui/themes";
import styles from "./AuthForm.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ClientSideImageSwitcher } from "../ClientSideImageSwitcher";
import { CredentialsForm, AuthAction, SignUpForm } from "./CredentialsForm";

type Props = {
  authAction: AuthAction;
};

export const AuthForm: React.FC<Props> = ({ authAction }) => {
  const isLogin = authAction === "login";
  const title = isLogin ? "Login" : "Sign up";
  const switchModeText = isLogin ? "Sign up" : "Login";
  const switchModeLink = isLogin ? "/sign-up" : "/login";

  return (
    <div>
      <Flex justify="center" p="4">
        <Text as="div" size="7">
          {title}
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
          {isLogin ? <CredentialsForm /> : <SignUpForm />}
          <Text as="div" size="2" mt="2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Link href={switchModeLink}>
              <Button
                variant="ghost"
                ml="2"
                size="2"
                className={styles.switchModeButton}
              >
                {switchModeText}
              </Button>
            </Link>
          </Text>
        </Flex>
      </Card>
    </div>
  );
};
