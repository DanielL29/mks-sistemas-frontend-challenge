import { CartStyleProps } from "@/layouts/Header";
import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";
import Cart from ".";

describe("Cart Component", () => {
  it("should render a cart with products", () => {
    const cart: CartStyleProps = {
      cartWidth: "0px",
      invisibleScreenWidth: "0%",
    };
    const setCart = () => {};

    const { getByText, getByAltText } = renderWithProviders(
      <Cart cart={cart} setCart={setCart} />
    );

    expect(getByAltText("close")).toBeInTheDocument();
    expect(getByText("Carrinho de compras")).toBeInTheDocument();
    expect(getByText("Total:")).toBeInTheDocument();
    expect(getByText("Finalizar Compra")).toBeInTheDocument();
  });
});
