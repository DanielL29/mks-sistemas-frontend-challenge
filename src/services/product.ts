import { Product } from "@/store/features/listProducts";
import { api } from "./api";

async function getProducts(): Promise<{
  data: { products: Product[] };
}> {
  return api.get("/products", {
    params: {
      page: 1,
      rows: 8,
      sortBy: "id",
      orderBy: "ASC",
    },
  });
}

export const productService = {
  getProducts,
};
