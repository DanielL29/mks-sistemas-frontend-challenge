import ProductCard from "@/components/ProductCard";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { listProducts } from "@/store/features/listProducts";
import styled from "styled-components";
import { useEffect } from "react";

export default function Products() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.listProducts);

  useEffect(() => {
    (async () => {
      await dispatch(listProducts());
    })();

    return () => {};
  }, []);

  return (
    <ProductsWrapper>
      <div>
        {products.map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={product.price}
              isLoading={loading}
            />
          );
        })}
      </div>
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 70px;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 240px);
  }
`;
