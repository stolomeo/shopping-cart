import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { ProductCardProps } from "../../../types";
import ProductCard from "./ProductCard";

describe("<ProductCard/>", () => {
  expect.extend(toHaveNoViolations);
  let productCardProps: ProductCardProps;

  beforeEach(() => {
    productCardProps = {
      id: 1,
      title: "test",
      price: 4.99,
      image: "test",
      handleAddToCart: jest.fn,
    };
  });

  const renderComponent = () => render(<ProductCard {...productCardProps} />);

  //   it("should render expected text for title with defined value", () => {
  //     ProductCardProps.title = "Test title";
  //     renderComponent();
  //     const titleElement = screen.getByRole("heading", {name: /})
  //     expect();
  //   });

  it("should demonstrate this matcher's usage with react testing library", async () => {
    const { container } = renderComponent();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
