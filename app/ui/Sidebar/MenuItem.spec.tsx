import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuItem } from "./MenuItem";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

describe("<MenuItem />", () => {
  it("renders without crashing", () => {
    render(<MenuItem active={false} disabled={false} label="Test Item" />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });

  it("handles the disabled state", () => {
    render(<MenuItem disabled={true} label="Disabled Item" />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows prefix and suffix content", () => {
    render(
      <MenuItem
        prefix={<span>Prefix</span>}
        suffix={<span>Suffix</span>}
        label="Content"
      />
    );
    expect(screen.getByText("Prefix")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Suffix")).toBeInTheDocument();
  });

  it("renders an icon when provided", () => {
    render(<MenuItem icon={<GitHubLogoIcon />} label="Item With Icon" />);
    expect(screen.getByText("Item With Icon")).toBeInTheDocument();
  });
});
