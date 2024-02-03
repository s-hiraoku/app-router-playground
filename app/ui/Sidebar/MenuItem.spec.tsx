import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuItem } from "./MenuItem";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

describe("<MenuItem />", () => {
  it("renders without crashing", () => {
    render(
      <MenuItem active={false} disabled={false}>
        Test Item
      </MenuItem>
    );
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });

  it("handles the disabled state", () => {
    render(<MenuItem disabled={true}>Disabled Item</MenuItem>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows prefix and suffix content", () => {
    render(
      <MenuItem prefix={<span>Prefix</span>} suffix={<span>Suffix</span>}>
        Content
      </MenuItem>
    );
    expect(screen.getByText("Prefix")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Suffix")).toBeInTheDocument();
  });

  it("renders an icon when provided", () => {
    render(<MenuItem icon={<GitHubLogoIcon />}>Item With Icon</MenuItem>);
    expect(screen.getByText("Item With Icon")).toBeInTheDocument();
  });

  // Additional tests can include:
  // - Verifying the `active` prop's effect, if it had a visual or functional impact.
  // - Testing click events or interactions, especially if the component eventually incorporates onClick or similar props.
});
