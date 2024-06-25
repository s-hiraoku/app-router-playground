"use client";

import { Box } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { ErrorMessages } from "@/app/_ui/ErrorMessages";

const errorMessages: { [key: string]: string } = {
  OAuthAccountNotLinked:
    "This email address is already in use with another provider.",
  OAuthCallbackError: "There was an error during the OAuth callback!",
};

export const LoginError: React.FC = () => {
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");

  const urlError = errorType ? errorMessages[errorType] : null;

  return (
    <>
      {urlError && (
        <Box>
          <ErrorMessages errors={[urlError]} alignCenter={true} />
        </Box>
      )}
    </>
  );
};
