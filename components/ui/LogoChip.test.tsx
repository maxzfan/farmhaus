import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LogoChip } from "./LogoChip";

describe("LogoChip", () => {
  it("renders an image with the org name as alt text when src is provided", () => {
    render(<LogoChip name="BASES" src="/logos/bases.svg" />);
    const img = screen.getByAltText("BASES");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/logos/bases.svg");
  });

  it("degrades to a text chip showing the org name when no src is given", () => {
    render(<LogoChip name="Telomis" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Telomis")).toBeInTheDocument();
  });
});
