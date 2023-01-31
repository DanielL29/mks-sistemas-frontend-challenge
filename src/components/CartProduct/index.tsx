import Image from "next/image";
import closeIcon from "@/assets/images/close.svg";
import { CartProductWrapper, FloatClose, Quantity } from "./Style";
import { CartItemPayload } from "@/store/features/cartItems";
import { useCart } from "@/hooks/useCart";

interface CartProductProps {
  product: CartItemPayload;
  quantity: number;
}

export default function CartProduct({ product, quantity }: CartProductProps) {
  const { incrementCart, decrementCart, removeProductFromCart } = useCart();

  return (
    <CartProductWrapper>
      <Image
        loader={() => product.photo}
        src={product.photo}
        alt="product"
        width={0}
        height={0}
      />
      <h1>{product.name}</h1>
      <Quantity>
        <h2>Qtd:</h2>
        <div>
          <button onClick={() => decrementCart(product, quantity)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => incrementCart(product)}>+</button>
        </div>
      </Quantity>
      <strong>R${Number(product.price)}</strong>
      <FloatClose onClick={() => removeProductFromCart(product, quantity)}>
        <Image src={closeIcon} alt="close" width={0} height={0} />
      </FloatClose>
    </CartProductWrapper>
  );
}
