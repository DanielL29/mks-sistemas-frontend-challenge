import Product from "@/components/Product";
import styled from "styled-components";

export default function Products() {
  return (
    <ProductsWrapper>
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
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
