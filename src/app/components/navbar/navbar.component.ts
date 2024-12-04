import { Component, inject, Input } from '@angular/core';
import { SearchService } from 'src/app/searchBar/search.service';
import { CardComponent } from '../card/card.component';

interface selectNav {
  label: string;
  value: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() cardComponent!: CardComponent;

  isMobile = window.innerWidth < 768;
  selectedValue = null;
  searchQuery: string = '';

  private searchService: SearchService = inject(SearchService);

  // Metodo per gestire la ricerca nell'input
  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.trim();
    this.searchService.setSearchTerm(query);
  }

  change(value: boolean): void {
    console.log(value);
  }
}
