import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";
import CartProduct from ".";

describe("CartProduct Component", () => {
  it("should render a cart product", () => {
    const initialState = {
      cartItems: [
        {
          product: {
            id: 1,
            name: "Iphone 11 128 GB",
            photo:
              "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            price: "5000.00",
          },
          quantity: 2,
        },
      ],
      amount: 5000,
    };

    const product = initialState.cartItems[0].product;
    const quantity = initialState.cartItems[0].quantity;

    const { getByText, getByAltText } = renderWithProviders(
      <CartProduct product={product} quantity={quantity} />,
      {
        preloadedState: {
          cartItems: initialState,
        },
      }
    );

    expect(getByAltText("product")).toBeInTheDocument();
    expect(getByText("Iphone 11 128 GB")).toBeInTheDocument();
    expect(getByText("5000")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});
