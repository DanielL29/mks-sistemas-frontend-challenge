import styled from "styled-components";
import { CartStylePropsPartial } from ".";

export const InvisibleScreen = styled.div<CartStylePropsPartial>`
  width: ${({ invisibleScreenWidth }) =>
    invisibleScreenWidth ? "100%" : "0%"};
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const OpenedCart = styled.div<CartStylePropsPartial>`
  width: ${({ cartWidth }) => (cartWidth ? "486px" : "0px")};
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  right: 0;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: all 300ms ease-in-out;
  padding-left: ${({ cartWidth }) => (cartWidth ? "47px" : "0px")};
  padding-top: 36px;

  > div {
    display: ${({ cartWidth }) => (cartWidth ? "initial" : "none")};
  }

  @media (max-width: 500px) {
    width: ${({ cartWidth }) => (cartWidth ? "80%" : "0%")};
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
  padding-bottom: 400px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 486px;

  font-weight: 700;
  font-size: 28px;
  color: #fff;
  position: fixed;
  bottom: 0;
  margin: 42px 0;
  background-color: #0f52ba;
  padding: 30px 100px 97px 0px;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const Purchase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
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
  text-align: center;

  :hover {
    filter: brightness(1.5);
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;
