import Image from "next/image";
import shoppingBagIcon from "@/assets/images/shopping-bag.svg";
import ContentLoader from "react-content-loader";
import { BuyButton, Content, PriceTag, ProductWrapper } from "./style";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  isLoading: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  photo,
  price,
  isLoading,
}: ProductCardProps) {
  const { updateCart } = useCart();

  return (
    <ProductWrapper>
      {isLoading ? (
        <ContentLoader height="50%" width="100%">
          <rect width="100%" height="100%" />
        </ContentLoader>
      ) : (
        <Image
          loader={() => photo}
          src={photo}
          alt="product"
          width={0}
          height={0}
          unoptimized
          priority
        />
      )}
      <Content>
        <div>
          <h1>
            {isLoading ? (
              <ContentLoader height="20px" width="100%">
                <rect width="100%" height="100%" />
              </ContentLoader>
            ) : (
              name
            )}
          </h1>
          {isLoading ? (
            <ContentLoader height="20px" width="100%">
              <rect width="100%" height="100%" />
            </ContentLoader>
          ) : (
            <PriceTag>R${Number(price)}</PriceTag>
          )}
        </div>
        <p>
          {isLoading ? (
            <ContentLoader height="50px" width="100%">
              <rect width="100%" height="100%" />
            </ContentLoader>
          ) : (
            description
          )}
        </p>
      </Content>
      <BuyButton
        onClick={() => updateCart(id, name, photo, price)}
        disabled={isLoading}
      >
        <Image src={shoppingBagIcon} alt="shopping-bag" />
        comprar
      </BuyButton>
    </ProductWrapper>
  );
}
