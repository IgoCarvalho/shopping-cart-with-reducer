import { CurrencyCircleDollar, ShoppingCart } from '@phosphor-icons/react';

import { Button } from '../../components/Button/Button';

import {
  Container,
  ProductActionButtons,
  ProductColor,
  ProductColorContainer,
  ProductColors,
  ProductImageContainer,
  ProductInfoContainer,
  ProductPrice,
} from './Product.styles';

export function Product() {
  return (
    <Container>
      <ProductImageContainer color="#f7c29b">
        <img src="/images/shoes1.png" alt="Nike Air" />
      </ProductImageContainer>

      <ProductInfoContainer>
        <h1>Nike Air</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum laudantium error
          suscipit quam a minima sunt pariatur aliquid totam!
        </p>

        <ProductPrice>
          <span className="discount">$190.00</span>
          <span>$290.00</span>
        </ProductPrice>

        <ProductColorContainer>
          <p>Colors:</p>
          <ProductColors>
            <ProductColor color="#2e2ee3" />
            <ProductColor color="#f6ae2d" />
            <ProductColor color="#7be498" />
          </ProductColors>
        </ProductColorContainer>

        <ProductActionButtons>
          <Button variant="secondary" type="button">
            <ShoppingCart size={24} />
            Add to cart
          </Button>
          <Button type="button">
            <CurrencyCircleDollar size={32} />
            By now
          </Button>
        </ProductActionButtons>
      </ProductInfoContainer>
    </Container>
  );
}
