import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchCriteriaSubject = new BehaviorSubject<{ text: string, option: string }>({ text: '', option: 'Todos' });
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  setSearchCriteria(text: string, option: string) {
    this.searchCriteriaSubject.next({ text, option });
  }

  getSearchCriteria() {
    return this.searchCriteriaSubject.value;
  }
}
