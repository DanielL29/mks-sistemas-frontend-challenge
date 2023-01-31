import Header from ".";
import { renderWithProviders } from "@/store/renderWithProviders";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("should show app logo", () => {
    const { getByText } = renderWithProviders(<Header />);

    expect(getByText("MKS")).toBeInTheDocument();
    expect(getByText("Sistemas")).toBeInTheDocument();
  });
});
