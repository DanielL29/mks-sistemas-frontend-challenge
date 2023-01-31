import Image from "next/image";
import { CartStyleProps } from "@/layouts/Header";
import closeIcon from "@/assets/images/close.svg";
import CartProduct from "../CartProduct";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  Amount,
  CartProducts,
  InvisibleScreen,
  OpenedCart,
  Purchase,
  TitleClose,
} from "./style";
import { clearCart, selectCartItems } from "@/store/features/cartItems";
import { toast } from "react-toastify";
import { clearCounter } from "@/store/features/productCounter";

interface CartProps {
  cart: CartStyleProps;
  setCart: (cart: CartStyleProps) => void;
}

export type CartStylePropsPartial = Partial<CartStyleProps>;

export default function Cart({ cart, setCart }: CartProps) {
  const { cartItems, amount } = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  function purchase() {
    toast.success(`Compra de R$${amount.toFixed(2)} efetuada!`);
    dispatch(clearCounter());
    dispatch(clearCart());
  }

  return (
    <>
      <InvisibleScreen
        invisibleScreenWidth={cart.invisibleScreenWidth}
        onClick={() =>
          setCart({ cartWidth: false, invisibleScreenWidth: false })
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
                setCart({ cartWidth: false, invisibleScreenWidth: false })
              }
            />
          </TitleClose>
          <CartProducts>
            {cartItems.map((item) => {
              return (
                <CartProduct
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              );
            })}
          </CartProducts>
          <Amount>
            <h4>Total:</h4>
            <span>R${amount}</span>
          </Amount>
          <Purchase onClick={purchase}>Finalizar Compra</Purchase>
        </div>
      </OpenedCart>
    </>
  );
}
