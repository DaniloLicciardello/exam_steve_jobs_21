import { Component } from '@angular/core';
import * as data from 'src/assets/data/train.json';
import { Card, cards } from '../../../assets/data/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  loading: boolean = false;
  cards: Card[] = cards;
  filteredCards: Card[] = cards; // Card visibili (inizialmente tutte)
  selectedValue: string | undefined; // Valore selezionato nella select

  onButtonClick(card: any): void {
    console.log('Button clicked for:', card.title);
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  selectNav = cards.map((card) => ({
    label: card.title, // Etichetta visibile nella select
    value: card.id, // Identificativo univoco
  }));

  // Metodo chiamato quando cambia la selezione
  onSelectionChange(selectedId: number | undefined): void {
    if (selectedId) {
      this.filteredCards = this.cards.filter((card) => card.id === selectedId);
    } else {
      this.filteredCards = this.cards; // Mostra tutte se la selezione è cancellata
    }
  }
  

}
