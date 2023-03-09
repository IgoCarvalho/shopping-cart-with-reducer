import { ReactNode } from 'react';
import { Container } from './ShoppingContent.styles';

type ShoppingContentProps = {
  children: ReactNode;
};

export function ShoppingContent({ children }: ShoppingContentProps) {
  return <Container>{children}</Container>;
}
