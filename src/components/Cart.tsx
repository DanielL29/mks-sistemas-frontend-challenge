import Image from "next/image";
import styled from "styled-components";
import { CartStyleProps } from "../layouts/Header";
import closeIcon from "../assets/images/close.svg";
import CartProduct from "./CartProduct";

interface CartProps {
  cart: CartStyleProps;
  setCart: (cart: CartStyleProps) => void;
}

type CartStylePropsPartial = Partial<CartStyleProps>;

export default function Cart({ cart, setCart }: CartProps) {
  return (
    <>
      <InvisibleScreen
        invisibleScreenWidth={cart.invisibleScreenWidth}
        onClick={() =>
          setCart({ cartWidth: "0px", invisibleScreenWidth: "0%" })
        }
      />
      <OpenedCart cartWidth={cart.cartWidth}>
        <div>
          <TitleClose>
            <h1>Carrinho de compras</h1>
            <Image
              src={closeIcon}
              alt="close"
              width={0}
              height={0}
              onClick={() =>
                setCart({ cartWidth: "0px", invisibleScreenWidth: "0%" })
              }
            />
          </TitleClose>
          <CartProducts>
            <CartProduct />
            <CartProduct />
          </CartProducts>
          <Amount>
            <h4>Total:</h4>
            <span>R$798</span>
          </Amount>
          <Purchase>Finalizar Compra</Purchase>
        </div>
      </OpenedCart>
    </>
  );
}

const InvisibleScreen = styled.div<CartStylePropsPartial>`
  width: ${({ invisibleScreenWidth }) => invisibleScreenWidth};
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const OpenedCart = styled.div<CartStylePropsPartial>`
  width: ${({ cartWidth }) => cartWidth};
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: all 300ms ease-in-out;
  padding-left: ${({ cartWidth }) => (cartWidth !== "0px" ? "47px" : "0px")};
  padding-top: 36px;

  > div {
    display: ${({ cartWidth }) => (cartWidth !== "0px" ? "initial" : "none")};
  }
`;

const TitleClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 22px;
  margin-bottom: 70px;

  h1 {
    font-weight: 700;
    font-size: 27px;
    color: #fff;
  }

  img {
    height: 38px;
    width: 38px;
    cursor: pointer;
  }
`;

const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 200px;

  font-weight: 700;
  font-size: 28px;
  color: #fff;
  position: fixed;
  bottom: 0;
  margin: 42px 0;
  padding-bottom: 97px;
`;

const Purchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 486px;
  height: 97px;
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  position: fixed;
  bottom: 0;
  background-color: #000;
  margin-left: -47px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  :hover {
    filter: brightness(1.5);
  }
`;
