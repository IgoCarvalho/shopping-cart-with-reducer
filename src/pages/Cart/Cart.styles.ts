import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 0;
  gap: 32px;
`;

export const CartHeader = styled.header`
  padding-bottom: 32px;
  border-bottom: 1px solid var(--foreground);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImageContainer = styled.div`
  width: 100px;
  background-color: #f7c29b;
  border-radius: 16px;
`;

export const ProductInfo = styled.div`
  padding: 8px 0;

  p {
    font-size: 20px;
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--foreground);
  width: fit-content;
`;
export const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--foreground);
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  &:hover {
    background-color: var(--foreground);
  }
`;

export const ShoppingCartTable = styled.table`
  margin-top: 32px;
  width: 100%;
  font-size: 18px;

  thead th {
    color: ${darken(0.4)('#e7e9eb')};
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;

    &:first-child {
      width: 50%;
    }

    &:last-child {
      width: 10px;
    }
  }
`;
