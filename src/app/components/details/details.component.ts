import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, cards } from '../../../assets/data/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  cards: Card[] = cards;
  data?: Card;
  date = null;
  selectedDateRange: [Date, Date] | null = null;
  dateRange: [Date, Date] | null = null;
  defaultRange: [Date, Date] | null = null;

  private route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.data = cards.find((card) => card.id === id);

    if (!this.data) {
      console.error('Nessun dato trovato per:', id);
    }

    if (this.data) {
      const departureDate = new Date(this.data.departure);
      const arrivalDate = new Date(this.data.arrival);

      this.defaultRange = [departureDate, arrivalDate];

      setTimeout(() => {
        this.dateRange = [departureDate, arrivalDate];
      }, 0);
    } else {
      console.error('Nessun dato trovato per:', id);
    }
  }

  onDateChange(range: [Date, Date] | null): void {
    this.selectedDateRange = range;

    if (range && this.data?.departure && this.data?.arrival) {
      const [startDate, endDate] = range.map((date) => date.getTime());
      const departureTime = new Date(this.data.departure).getTime();
      const arrivalTime = new Date(this.data.arrival).getTime();

      if (departureTime < startDate || arrivalTime > endDate) {
        console.warn('Selected range does not match train availability.');
      }
    }
  }

  selectedTrain: Card | null = null;

  onTrainClick(train: Card): void {
    this.selectedTrain = this.selectedTrain?.id === train.id ? null : train;
  }
}
