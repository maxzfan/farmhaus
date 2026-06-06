import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Founders } from "./Founders";
import { founders } from "@/data/founders";

describe("Founders section", () => {
  it("renders one card per founder in the data file", () => {
    render(<Founders />);
    // Each card is an <article>
    expect(screen.getAllByRole("article")).toHaveLength(founders.length);
    expect(founders).toHaveLength(7);
  });

  it("renders each founder's name and headline role", () => {
    render(<Founders />);
    expect(
      screen.getByRole("heading", { name: "Max Fan" })
    ).toBeInTheDocument();
    expect(screen.getByText("CTO @ 0studio")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Nathaniel Laurent" })
    ).toBeInTheDocument();
  });

  it("renders a numeral placeholder for founders without a photo", () => {
    render(<Founders />);
    // FounderCard exposes the placeholder via an accessible label
    expect(
      screen.getByLabelText("Max Fan — photo coming soon")
    ).toBeInTheDocument();
  });

  it("renders org logo chips for a founder", () => {
    render(<Founders />);
    // Cardinal Ventures appears as a text chip (no asset) for multiple founders
    expect(screen.getAllByText("Cardinal Ventures").length).toBeGreaterThan(0);
  });
});
