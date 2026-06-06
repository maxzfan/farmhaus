import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Events } from "./Events";

describe("Events section", () => {
  it("renders a 'Suggest an Event' mailto button to maxfan@stanford.edu", () => {
    render(<Events />);
    const link = screen.getByRole("link", { name: /suggest an event/i });
    const href = link.getAttribute("href") ?? "";
    expect(href).toMatch(/^mailto:maxfan@stanford\.edu/);
  });

  it("includes a subject line in the mailto query", () => {
    render(<Events />);
    const link = screen.getByRole("link", { name: /suggest an event/i });
    expect(link.getAttribute("href")).toContain("subject=");
  });

  it("renders the coming-soon status text", () => {
    render(<Events />);
    expect(screen.getByText(/compiling the lineup/i)).toBeInTheDocument();
  });
});
