import styled from 'styled-components';

export const Container = styled.header`
  --horizontal-padding: 24px;

  width: 100%;
  background-color: var(--background);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const Content = styled.div`
  width: calc(100% - var(--horizontal-padding));
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media screen and (max-width: 425px) {
    padding: 12px 0;
  }
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

  @media screen and (max-width: 425px) {
    span {
      display: none;
    }

    padding: 12px;
    border-radius: 18px;
  }
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

  @media screen and (max-width: 425px) {
    input {
      display: none;
    }

    padding: 12px;
    border-radius: 18px;
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

  @media screen and (max-width: 425px) {
    padding: 8px;
    border-radius: 14px;
  }
`;

export const ShoppingCartBadge = styled.span`
  width: 30px;
  height: 30px;
  background-color: var(--primary);
  color: #ffffff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 12px rgba(246, 114, 128, 0.5);
`;
