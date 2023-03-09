import { ButtonHTMLAttributes, ReactNode } from 'react';

import { type ButtonStylesProps, Container } from './Button.styles';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<ButtonStylesProps>;

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
}
