import Footer from ".";
import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("should show footer copyright logo", () => {
    const { getByText } = renderWithProviders(<Footer />);

    expect(
      getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
