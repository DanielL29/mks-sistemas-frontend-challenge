import styled from "styled-components";
import { CartStyleProps } from "./Header";

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
      <OpenedCart cartWidth={cart.cartWidth} />
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
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: all 300ms ease-in-out;
`;
