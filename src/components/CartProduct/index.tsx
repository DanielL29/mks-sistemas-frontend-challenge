import Image from "next/image";
import closeIcon from "@/assets/images/close.svg";
import { CartProductWrapper, FloatClose, Quantity } from "./style";

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
