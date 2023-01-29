import Image from "next/image";
import styled from "styled-components";
import closeIcon from "../assets/images/close.svg";

export default function CartProduct() {
  const image = "https://http.cat/404.jpg";

  return (
    <CartProductWrapper>
      <Image
        loader={() => image}
        src={image}
        alt="product"
        width={0}
        height={0}
      />
      <h1>Apple Watch Series 4 GPS</h1>
      <Quantity>
        <h2>Qtd:</h2>
        <div>
          <span>-</span>
          <p>1</p>
          <span>+</span>
        </div>
      </Quantity>
      <strong>R$399</strong>
      <FloatClose>
        <Image src={closeIcon} alt="close" width={0} height={0} />
      </FloatClose>
    </CartProductWrapper>
  );
}

const CartProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 379px;
  height: 95px;
  background-color: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding-right: 35px;
  position: relative;

  > img {
    height: 100%;
    width: 25%;
    object-fit: contain;
    border-radius: 8px 0px 0px 8px;
  }

  h1 {
    font-weight: 400;
    font-size: 13px;
    color: #2c2c2c;
    width: 25%;
  }

  strong {
    font-weight: 700;
    font-size: 14px;
    color: #000;
  }
`;

const Quantity = styled.div`
  color: #000;

  h2 {
    font-weight: 400;
    font-size: 5px;
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 19px;
    width: 50px;
    background-color: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
    font-weight: 500;
    font-size: 8px;
    padding: 0 7px;
  }

  p {
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;
    padding: 0 7px;
  }

  span {
    cursor: pointer;
  }
`;

const FloatClose = styled.div`
  position: absolute;
  right: -6px;
  top: -5px;
  cursor: pointer;

  img {
    height: 18px;
    width: 18px;
  }
`;
