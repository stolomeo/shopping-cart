import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Products from "./Products";

describe("<Products />", () => {
  const renderComponent = () => render(<Products />);

  it("should match snapshot", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it("should demonstrate this matcher's usage with react testing library", async () => {
    const { container } = renderComponent();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
