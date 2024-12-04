import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, cards } from '../../../assets/data/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  data?: Card;

  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = cards.find((card) => card.id === id);

    if (!this.data) {
      console.error('Card not found for id:', id);
    }
  }
}
