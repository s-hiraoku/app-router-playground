import { render } from "@testing-library/react";
import { AuthForm } from "./AuthForm";

test("Enjoy Testing!", () => {
  render(<AuthForm authAction="login" />);
});
