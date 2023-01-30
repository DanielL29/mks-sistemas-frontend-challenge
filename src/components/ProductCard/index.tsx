import { useAppDispatch } from "@/hooks/useRedux";
import { increment } from "@/store/features/productCounter";
import Image from "next/image";
import shoppingBagIcon from "@/assets/images/shopping-bag.svg";
import ContentLoader from "react-content-loader";
import { BuyButton, Content, PriceTag, ProductWrapper } from "./style";

interface ProductCardProps {
  name: string;
  description: string;
  photo: string;
  price: string;
  isLoading: boolean;
}

export default function ProductCard({
  name,
  description,
  photo,
  price,
  isLoading,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

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
      <BuyButton onClick={() => dispatch(increment())}>
        <Image src={shoppingBagIcon} alt="shopping-bag" />
        comprar
      </BuyButton>
    </ProductWrapper>
  );
}
