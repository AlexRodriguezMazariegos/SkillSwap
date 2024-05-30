import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchCriteriaSubject = new BehaviorSubject<{ text: string, option: string }>({ text: '', option: 'Todos' });
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  setSearchCriteria(text: string, option: string) {
    console.log(text);
    this.searchCriteriaSubject.next({ text, option });
  }

  getSearchCriteria() {
    console.log(this.searchCriteriaSubject.value);
    return this.searchCriteriaSubject.value;
  }
}
