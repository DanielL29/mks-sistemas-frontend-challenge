import Image from "next/image";
import styled from "styled-components";
import shoppingBagIcon from "../assets/images/shopping-bag.svg";

export default function Product() {
  const image = "https://http.cat/404.jpg";

  return (
    <ProductWrapper>
      <Image
        loader={() => image}
        src={image}
        alt="product"
        width={0}
        height={0}
      />
      <Content>
        <div>
          <h1>Apple Watch Series 4 GPS</h1>
          <PriceTag>R$399</PriceTag>
        </div>
        <p>Redesigned from scratch and completely revised.</p>
      </Content>
      <BuyButton>
        <Image src={shoppingBagIcon} alt="shopping-bag" />
        comprar
      </BuyButton>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 217px;
  height: 285px;
  margin-bottom: 31px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  img {
    height: 50%;
    width: 100%;
    object-fit: contain;
    border-radius: 8px 8px 0px 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  h1 {
    font-weight: 400;
    font-size: 16px;
    color: #2c2c2c;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-weight: 300;
    font-size: 10px;
    color: #2c2c2c;
    margin-top: 17px;
  }
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  background-color: #373737;
  border-radius: 5px;
  padding: 5px 7px;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;

const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  outline: none;
  border: none;
  background-color: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 32px;
  text-align: center;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  img {
    height: 16px;
    width: 15px;
  }
`;
