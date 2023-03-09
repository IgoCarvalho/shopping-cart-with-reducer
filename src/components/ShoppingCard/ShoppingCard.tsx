import {
  CardContent,
  CardImageContainer,
  CardPriceContainer,
  CardTitle,
  Container,
  CardColorsContainer,
  CardColorsTitle,
  CardColorsList,
  CardColor,
} from './ShoppingCard.styles';

export function ShoppingCard() {
  return (
    <Container>
      <CardImageContainer>
        <img src="/images/shoes1.png" alt="Nike air" />
      </CardImageContainer>

      <CardContent>
        <CardTitle>Nike air</CardTitle>

        <CardPriceContainer>
          <span className="discount">$180,00</span>
          <span>$289,00</span>
        </CardPriceContainer>

        <CardColorsContainer>
          <CardColorsTitle>Colors</CardColorsTitle>

          <CardColorsList>
            <CardColor color="#ff2323" />
            <CardColor color="#1fa3cc" />
          </CardColorsList>
        </CardColorsContainer>
      </CardContent>
    </Container>
  );
}
