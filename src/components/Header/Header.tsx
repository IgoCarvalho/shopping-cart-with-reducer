import { Heart, MagnifyingGlass, ShoppingCart, User } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  HeaderButton,
  HeaderInputContainer,
  HeaderMenu,
  HeaderMenuIcon,
  LeftContent,
  RightContent,
  ShoppingCartBadge,
} from './Header.styles';

export function Header() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <HeaderMenu>
            <HeaderMenuIcon />
            <span>Menu</span>
          </HeaderMenu>

          <HeaderInputContainer>
            <MagnifyingGlass size={24} color="var(--text)" />
            <input type="text" placeholder="Search" />
          </HeaderInputContainer>
        </LeftContent>

        <RightContent>
          <HeaderButton>
            <User size={24} weight="bold" />
          </HeaderButton>
          <HeaderButton>
            <Heart size={24} weight="bold" />
          </HeaderButton>
          <Link to="/cart">
            <HeaderButton>
              <ShoppingCart size={24} weight="bold" />
              <ShoppingCartBadge>2</ShoppingCartBadge>
            </HeaderButton>
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
}
