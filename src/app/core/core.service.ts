import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private isOpenedSidebar$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  toggleSidebar(toggle: boolean) {
    this.isOpenedSidebar$.next(toggle)
  }

  getSidebarState() {
    return this.isOpenedSidebar$.asObservable()
  }
}
