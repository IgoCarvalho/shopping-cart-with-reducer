export type ShoppingData = {
  id: string;
  title: string;
  price: {
    value: number;
    discount?: number;
  };
  image: {
    background: string;
    src: string;
  };
  colors: string[];
};
