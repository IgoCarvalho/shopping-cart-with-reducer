import { darken, opacify } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  gap: 64px;
  width: calc(100% - 24px);
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 0;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    padding: 32px 0;
    gap: 24px;
  }
`;

type ProductImageContainerProps = {
  color: string;
};

export const ProductImageContainer = styled.div<ProductImageContainerProps>`
  ${({ color }) => css`
    background-color: ${color};
    box-shadow: ${opacify(0.25)(darken(0.025)(color))} 0px 30px 60px -12px inset,
      ${opacify(0.3)(darken(0.3)(color))} 0px 18px 36px -18px inset;
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 38px;

  @media screen and (max-width: 425px) {
    border-radius: 16px;

    img {
      width: 220px;
    }
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 64px 0;
  max-width: 550px;

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  & > p {
    font-size: 20px;
  }

  @media screen and (max-width: 425px) {
    padding: 0;
    gap: 12px;

    h1 {
      font-size: 28px;
    }

    & > p {
      font-size: 16px;
    }
  }
`;
export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 16px;

  span.discount {
    color: #fd4e61;
  }

  span.discount + span {
    text-decoration: line-through;
  }
`;

export const ProductColorContainer = styled.div`
  p {
    font-weight: 500;
  }
`;
export const ProductColors = styled.ul`
  margin-top: 12px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
`;

type ProductColorProps = {
  color: string;
};

export const ProductColor = styled.li<ProductColorProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  &:first-child {
    outline: 2px solid var(--background);
    outline-offset: -4px;
  }
`;

export const ProductActionButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 425px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    border-top: 1px solid var(--foreground);
  }
`;
