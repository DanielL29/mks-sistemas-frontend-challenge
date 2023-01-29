import Image from "next/image";
import styled from "styled-components";
import cartIcon from "../assets/images/cart.svg";
import { CartStyleProps } from "../layouts/Header";

interface CartButtonProps {
  setCart: (cart: CartStyleProps) => void;
}

export default function CartButton({ setCart }: CartButtonProps) {
  return (
    <CartButtonWrapper
      onClick={() =>
        setCart({ cartWidth: "486px", invisibleScreenWidth: "100%" })
      }
    >
      <Image src={cartIcon} alt="cart" width={30} height={30} />
      <span>0</span>
    </CartButtonWrapper>
  );
}

const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;

  img {
    height: auto;
    width: auto;
    height: 18px;
    width: 19px;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    color: #000;
  }
`;
