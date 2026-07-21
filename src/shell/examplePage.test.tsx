import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExamplePage } from "./ExamplePage";

describe("HomePage", () => {
  it("renders the heading", () => {
    render(<ExamplePage />);
    expect(screen.getByRole("heading", { name: /won/i })).toBeInTheDocument();
  });
});
