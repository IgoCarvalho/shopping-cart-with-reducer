import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 24px);
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

  @media screen and (max-width: 425px) {
    padding-bottom: 16px;

    h1 {
      font-size: 24px;
    }
  }
`;

export const CartContent = styled.main``;

export const ProductContainer = styled.div`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const ImageContainer = styled.div`
  width: 100px;
  background-color: #f7c29b;
  border-radius: 16px;

  @media screen and (max-width: 425px) {
    width: 70px;
  }
`;

export const ProductInfo = styled.div`
  padding: 8px 0;

  p {
    font-size: 20px;
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 425px) {
    p {
      font-size: 18px;
    }
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

  @media screen and (max-width: 425px) {
    gap: 6px;
  }
`;
export const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 38px;
    height: 38px;
  }

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

  @media screen and (max-width: 425px) {
    padding: 6px;

    span {
      display: none;
    }
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

  @media screen and (max-width: 425px) {
    margin-top: 24px;

    tbody {
      font-size: 16px;
    }

    thead th:nth-child(3),
    tbody td:nth-child(3) {
      display: none;
    }

    thead th,
    tbody td {
      padding: 6px;
    }

    tbody td:first-child {
      width: 100%;
    }
  }
`;

export const CartFooter = styled.footer`
  border-top: 1px solid var(--foreground);
  margin-top: 16px;

  width: calc(100% - 24px);
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  padding: 12px 0;

  p {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    font-size: 20px;

    strong {
      font-size: 28px;
    }
  }

  button {
    max-width: 250px;
  }

  @media screen and (max-width: 425px) {
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    p {
      strong {
        font-size: 24px;
      }
    }

    button {
      width: auto;
    }
  }
`;
