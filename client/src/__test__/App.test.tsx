import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should work as expected", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    const title = screen.queryByTestId("Navbar.Header");
    expect(title).toHaveTextContent("The Weather Channel");
  });
});
