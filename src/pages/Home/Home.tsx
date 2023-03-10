import { Link } from 'react-router-dom';

import { ShoppingCard } from '../../components/ShoppingCard/ShoppingCard';
import { ShoppingData } from '../../types/shopping';

import { Container } from './Home.styles';

const shoppingData: ShoppingData[] = [
  {
    id: '1',
    title: 'Nike Air',
    price: {
      value: 289,
      discount: 180,
    },
    image: {
      background: '#f7c29b',
      src: '/images/shoes1.png',
    },
    colors: ['#D7263D', '#3083dcff', '#7dde92ff', '#2ebfa5ff'],
  },
  {
    id: '2',
    title: 'Nike Flex',
    price: {
      value: 149,
    },
    image: {
      background: '#7be498',
      src: '/images/shoes2.png',
    },
    colors: ['#33658aff', '#86bbd8ff', '#f6ae2dff', '#f26419ff'],
  },
  {
    id: '3',
    title: 'Nike Flex',
    price: {
      value: 149,
    },
    image: {
      background: '#7be498',
      src: '/images/shoes2.png',
    },
    colors: ['#33658aff', '#86bbd8ff', '#f6ae2dff', '#f26419ff'],
  },
  {
    id: '4',
    title: 'Nike Flex',
    price: {
      value: 149,
    },
    image: {
      background: '#7be498',
      src: '/images/shoes2.png',
    },
    colors: ['#33658aff', '#86bbd8ff', '#f6ae2dff', '#f26419ff'],
  },
  {
    id: '5',
    title: 'Nike Flex',
    price: {
      value: 149,
    },
    image: {
      background: '#7be498',
      src: '/images/shoes2.png',
    },
    colors: ['#33658aff', '#86bbd8ff', '#f6ae2dff', '#f26419ff'],
  },
  {
    id: '6',
    title: 'Nike Flex',
    price: {
      value: 149,
    },
    image: {
      background: '#7be498',
      src: '/images/shoes2.png',
    },
    colors: ['#33658aff', '#86bbd8ff', '#f6ae2dff', '#f26419ff'],
  },
];

export function Home() {
  return (
    <Container>
      {shoppingData.map((item) => (
        <Link key={item.id} to="/products">
          <ShoppingCard data={item} />
        </Link>
      ))}
    </Container>
  );
}
