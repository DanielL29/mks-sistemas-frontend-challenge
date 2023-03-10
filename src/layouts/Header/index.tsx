import styled from "styled-components";
import Cart from "../../components/Cart";
import { useState } from "react";
import CartButton from "../../components/CartButton";

export interface CartStyleProps {
  cartWidth: boolean;
  invisibleScreenWidth: boolean;
}

export default function Header() {
  const [cart, setCart] = useState<CartStyleProps>({
    cartWidth: false,
    invisibleScreenWidth: false,
  });

  return (
    <HeaderWrapper>
      <Logo>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </Logo>
      <Cart cart={cart} setCart={setCart} />
      <CartButton setCart={setCart} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  width: 100%;
  height: 101px;
  left: 0;
  top: 0;
  background: #0f52ba;
  position: fixed;
  padding: 0 70px;
  z-index: 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  flex-wrap: wrap;

  h1 {
    font-weight: 600;
    font-size: 40px;
  }

  h2 {
    font-weight: 300;
    font-size: 20px;
  }
`;
