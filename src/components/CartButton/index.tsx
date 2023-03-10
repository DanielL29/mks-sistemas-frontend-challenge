import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { getAmount, getCartItems } from "@/store/features/cartItems";
import {
  getLocalValue,
  selectProductCounter,
} from "@/store/features/productCounter";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import cartIcon from "@/assets/images/cart.svg";
import { CartStyleProps } from "@/layouts/Header";

interface CartButtonProps {
  setCart: (cart: CartStyleProps) => void;
}

export default function CartButton({ setCart }: CartButtonProps) {
  const productCounter = useAppSelector(selectProductCounter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocalValue());
    dispatch(getCartItems());
    dispatch(getAmount());
  }, []);

  return (
    <CartButtonWrapper
      onClick={() => setCart({ cartWidth: true, invisibleScreenWidth: true })}
    >
      <Image src={cartIcon} alt="cart" />
      <span>{productCounter}</span>
    </CartButtonWrapper>
  );
}

const CartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  min-width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;

  img {
    height: auto;
    width: 19px;
  }

  span {
    font-weight: 700;
    font-size: 18px;
    color: #000;
  }
`;
