import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  loading: boolean = false;

  onButtonClick(card: any): void {
    console.log('Button clicked for:', card.title);
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  cards = [
    {
      title: 'Luxury Watch',
      subtitle: 'Timeless elegance',
      price: 299.99,
    },
    {
      title: 'Running Shoes',
      subtitle: 'Comfort and speed',
      price: 119.99,
    },
    {
      title: 'Leather Wallet',
      subtitle: 'Stylish and durable',
      price: 49.99,
    },
    {
      title: 'Wireless Headphones',
      subtitle: 'Crisp sound quality',
      price: 199.99,
    },
    {
      title: 'Backpack',
      subtitle: 'Travel-friendly design',
      price: 89.99,
    },
    {
      title: 'Smartphone',
      subtitle: 'Latest technology',
      price: 999.99,
    },
    {
      title: 'Camera Lens',
      subtitle: 'Professional-grade',
      price: 349.99,
    },
    {
      title: 'Fitness Tracker',
      subtitle: 'Track your progress',
      price: 129.99,
    },
    {
      title: 'Desk Lamp',
      subtitle: 'Modern design',
      price: 39.99,
    },
    {
      title: 'Electric Scooter',
      subtitle: 'Eco-friendly commuting',
      price: 449.99,
    },
    {
      title: 'Car',
      subtitle: 'Eco commuting',
      price: 59.99,
    },
    {
      title: 'Scooter',
      subtitle: 'Commuting',
      price: 39.99,
    },
  ];
}
