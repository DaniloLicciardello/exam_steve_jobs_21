export interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  start?: string;
  end?: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: 'Luxury Watch',
    subtitle: 'Timeless elegance',
    description:
      'An elegant timepiece that adds a touch of sophistication to any outfit.',
    price: 299.99,
    start: '2024-01-01',
    end: '2024-12-31',
  },
  {
    id: 2,
    title: 'Running Shoes',
    subtitle: 'Comfort and speed',
    description:
      'Designed for maximum comfort and speed, perfect for avid runners.',
    price: 119.99,
    start: '2024-02-01',
  },
  {
    id: 3,
    title: 'Leather Wallet',
    subtitle: 'Stylish and durable',
    description: 'A stylish and durable wallet made from high-quality leather.',
    price: 49.99,
    end: '2025-01-31',
  },
  {
    id: 4,
    title: 'Wireless Headphones',
    subtitle: 'Crisp sound quality',
    description:
      'Experience crisp and clear sound quality with these wireless headphones.',
    price: 199.99,
  },
  {
    id: 5,
    title: 'Backpack',
    subtitle: 'Travel-friendly design',
    description:
      'A travel-friendly backpack with ample storage for all your essentials.',
    price: 89.99,
  },
  {
    id: 6,
    title: 'Smartphone',
    subtitle: 'Latest technology',
    description:
      'Stay connected with the latest technology in this sleek smartphone.',
    price: 999.99,
  },
  {
    id: 7,
    title: 'Camera Lens',
    subtitle: 'Professional-grade',
    description:
      'Capture stunning photos with this professional-grade camera lens.',
    price: 349.99,
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    subtitle: 'Track your progress',
    description:
      'Monitor your fitness journey with this advanced fitness tracker.',
    price: 129.99,
  },
  {
    id: 9,
    title: 'Desk Lamp',
    subtitle: 'Modern design',
    description:
      'Illuminate your workspace with this modern and stylish desk lamp.',
    price: 39.99,
  },
  {
    id: 10,
    title: 'Electric Scooter',
    subtitle: 'Eco-friendly commuting',
    description: 'Commute eco-friendly with this reliable electric scooter.',
    price: 449.99,
  },
  {
    id: 11,
    title: 'Car',
    subtitle: 'Eco commuting',
    description: 'Drive efficiently with this eco-friendly car.',
    price: 59.99,
  },
  {
    id: 12,
    title: 'Scooter',
    subtitle: 'Commuting',
    description:
      'Perfect for commuting, this scooter is both affordable and convenient.',
    price: 39.99,
  },
];
