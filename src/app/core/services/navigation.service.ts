import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { navigation } from '../mock/navigation';
import { Navigation } from '../models/navigation.model';
import { footer } from '../mock/footer';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getNavigation(): Observable<Navigation[]> {
    return of(navigation)
  }

  getFooter(): Observable<Navigation[]> {
    return of(footer)
  }
}
