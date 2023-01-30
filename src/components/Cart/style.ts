import styled from "styled-components";
import { CartStylePropsPartial } from "../Cart";

export const InvisibleScreen = styled.div<CartStylePropsPartial>`
  width: ${({ invisibleScreenWidth }) => invisibleScreenWidth};
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const OpenedCart = styled.div<CartStylePropsPartial>`
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

export const TitleClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 22px;
  margin-bottom: 50px;

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

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 300px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Amount = styled.div`
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
  background-color: #0f52ba;
  padding: 30px 30px 97px 0px;
`;

export const Purchase = styled.div`
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
