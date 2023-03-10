import { darken, opacify } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 38px;

  @media screen and (max-width: 425px) {
    gap: 18px;
  }
`;

type CardImageContainerProps = { color: string };

export const CardImageContainer = styled.div<CardImageContainerProps>`
  ${({ color }) => css`
    background-color: ${color};
    box-shadow: ${opacify(0.25)(darken(0.025)(color))} 0px 30px 60px -12px inset,
      ${opacify(0.3)(darken(0.3)(color))} 0px 18px 36px -18px inset;
  `}

  width: 100%;
  max-width: 260px;
  padding: 20px 0;
  border-radius: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    max-width: 160px;
    padding: 10px 0;
  }
`;

export const CardContent = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const CardTitle = styled.p`
  font-weight: 700;
`;

export const CardPriceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 12px;

  span.discount {
    color: #fd4e61;
  }

  span.discount + span {
    text-decoration: line-through;
  }
`;

export const CardColorsContainer = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardColorsTitle = styled.p`
  color: #4e94f6;
  background-color: #cfe2fd;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
`;
export const CardColorsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
`;

type CardColorProps = {
  color: string;
};

export const CardColor = styled.li<CardColorProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;

  &:first-child {
    outline: 1px solid ${({ color }) => color};
    outline-offset: 1px;
  }
`;
