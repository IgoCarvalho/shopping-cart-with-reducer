import { ShoppingData } from '../../types/shopping';

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

type ShoppingCardProps = {
  data: ShoppingData;
};

export function ShoppingCard({ data }: ShoppingCardProps) {
  function formatPrice(value: number) {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  }

  return (
    <Container>
      <CardImageContainer color={data.image.background}>
        <img src={data.image.src} alt={data.title} />
      </CardImageContainer>

      <CardContent>
        <CardTitle>{data.title}</CardTitle>

        <CardPriceContainer>
          {data.price.discount && (
            <span className="discount">{formatPrice(data.price.discount)}</span>
          )}

          <span>{formatPrice(data.price.value)}</span>
        </CardPriceContainer>

        <CardColorsContainer>
          <CardColorsTitle>Colors</CardColorsTitle>

          <CardColorsList>
            {data.colors.map((color) => (
              <CardColor key={color} color={color} />
            ))}
          </CardColorsList>
        </CardColorsContainer>
      </CardContent>
    </Container>
  );
}
