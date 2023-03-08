import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const HeaderMenu = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background-color: var(--foreground);
  font-size: 20px;
  border: none;
  border-radius: 20px;
`;

export const HeaderMenuIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 2px;

  &::before,
  &::after {
    content: '';
    height: 2px;
    background-color: var(--text);
    display: block;
  }

  &::before {
    width: 20px;
  }

  &::after {
    width: 12px;
  }
`;

export const HeaderInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background-color: var(--foreground);
  border-radius: 20px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px;
  background-color: var(--background);
  border: none;
  border-radius: 20px;

  transition: 200ms;

  &:hover {
    background-color: var(--foreground);
  }
`;

export const ShoppingCartBadge = styled.span`
  width: 30px;
  height: 30px;
  background-color: #f67280;
  color: #ffffff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 12px rgba(246, 114, 128, 0.5);
`;
