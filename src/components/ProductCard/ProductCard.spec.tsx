import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";
import ProductCard from ".";

describe("ProductCard Component", () => {
  it("should add +1 in cart count and add the the product in the cart", () => {
    const product = {
      id: 1,
      name: "Iphone 11 128 GB",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: "5000.00",
    };

    const { getByText, getByAltText } = renderWithProviders(
      <ProductCard
        id={product.id}
        name={product.name}
        description={product.description}
        photo={product.photo}
        price={product.price}
        isLoading={false}
      />
    );

    expect(getByAltText("product")).toBeInTheDocument();
    expect(getByText("Iphone 11 128 GB")).toBeInTheDocument();
    expect(
      getByText(
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla."
      )
    ).toBeInTheDocument();
    expect(getByText("R$5000")).toBeInTheDocument();
  });
});
