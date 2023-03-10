import { Minus, Plus, Trash } from '@phosphor-icons/react';

import {
  CartHeader,
  Container,
  ImageContainer,
  ProductContainer,
  ProductInfo,
  QuantityButton,
  QuantityContainer,
  RemoveButton,
  ShoppingCartTable,
} from './Cart.styles';

export function Cart() {
  return (
    <Container>
      <CartHeader>
        <h1>Shopping Cart</h1>

        <p>3 Items</p>
      </CartHeader>

      <ShoppingCartTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <ProductContainer>
                <ImageContainer>
                  <img src="/images/shoes1.png" alt="Nike Air" />
                </ImageContainer>

                <ProductInfo>
                  <p>Nike Air</p>
                  <span>$190.00</span>
                </ProductInfo>
              </ProductContainer>
            </td>
            <td>
              <QuantityContainer>
                <QuantityButton>
                  <Minus weight="bold" />
                </QuantityButton>
                <p>1</p>
                <QuantityButton>
                  <Plus weight="bold" />
                </QuantityButton>
              </QuantityContainer>
            </td>
            <td>
              <strong>$570.00</strong>
            </td>
            <td>
              <RemoveButton>
                <Trash size={24} />
                <span>Remove</span>
              </RemoveButton>
            </td>
          </tr>
          <tr>
            <td>
              <ProductContainer>
                <ImageContainer>
                  <img src="/images/shoes1.png" alt="Nike Air" />
                </ImageContainer>

                <ProductInfo>
                  <p>Nike Air</p>
                  <span>$190.00</span>
                </ProductInfo>
              </ProductContainer>
            </td>
            <td>
              <QuantityContainer>
                <QuantityButton>
                  <Minus weight="bold" />
                </QuantityButton>
                <p>10</p>
                <QuantityButton>
                  <Plus weight="bold" />
                </QuantityButton>
              </QuantityContainer>
            </td>
            <td>
              <strong>$570.00</strong>
            </td>
            <td>
              <RemoveButton>
                <Trash size={24} />
                <span>Remove</span>
              </RemoveButton>
            </td>
          </tr>
          <tr>
            <td>
              <ProductContainer>
                <ImageContainer>
                  <img src="/images/shoes1.png" alt="Nike Air" />
                </ImageContainer>

                <ProductInfo>
                  <p>Nike Air</p>
                  <span>$190.00</span>
                </ProductInfo>
              </ProductContainer>
            </td>
            <td>
              <QuantityContainer>
                <QuantityButton>
                  <Minus weight="bold" />
                </QuantityButton>
                <p>1</p>
                <QuantityButton>
                  <Plus weight="bold" />
                </QuantityButton>
              </QuantityContainer>
            </td>
            <td>
              <strong>$570.00</strong>
            </td>
            <td>
              <RemoveButton>
                <Trash size={24} />
                <span>Remove</span>
              </RemoveButton>
            </td>
          </tr>
        </tbody>
      </ShoppingCartTable>
    </Container>
  );
}
