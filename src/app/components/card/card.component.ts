import { Component, inject } from '@angular/core';
import * as data from 'src/assets/data/train.json';
import { Card, cards } from '../../../assets/data/card';
import { SearchService } from 'src/app/searchBar/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  loading: boolean = false;
  cards: Card[] = cards;
  filteredCards: Card[] = cards;
  selectedValue: string | undefined;

  private searchService: SearchService = inject(SearchService);

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    // Otteniamo le card ciclate in base a ciò che si scrive
    this.searchService.searchTerm$.subscribe((query) => {
      this.filteredCards = this.cards.filter((card) =>
        card.title.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
}
