import styled, { css } from 'styled-components';

export type ButtonStylesProps = {
  variant: 'primary' | 'secondary';
};

export const Container = styled.button<ButtonStylesProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;
  text-transform: uppercase;

  transition: 200ms;

  ${({ variant }) => {
    if (variant === 'secondary') {
      return css`
        background-color: var(--background);
        border-color: var(--text);

        &:hover {
          background-color: var(--secondary-light);
        }
      `;
    }

    return css`
      background-color: var(--primary);
      color: #ffffff;

      &:hover {
        background-color: var(--primary-dark);
      }
    `;
  }}
`;
