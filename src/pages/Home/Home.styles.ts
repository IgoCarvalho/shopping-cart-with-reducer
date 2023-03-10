import styled from 'styled-components';

export const Container = styled.main`
  width: calc(100% - 24px);
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px 32px;
  justify-items: center;

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px 12px;
  }
`;
