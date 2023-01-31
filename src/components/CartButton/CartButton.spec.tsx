import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";
import CartButton from ".";

describe("CartButton Component", () => {
  it("should open the cart", () => {
    const { getByAltText, getByText } = renderWithProviders(
      <CartButton setCart={() => {}} />
    );

    expect(getByAltText("cart")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
  });
});
