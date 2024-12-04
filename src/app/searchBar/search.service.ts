import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>(''); // Osservabile con valore iniziale
  searchTerm$ = this.searchTermSubject.asObservable(); // Stream leggibile da altri componenti

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term); // Aggiorna il valore
  }
}
