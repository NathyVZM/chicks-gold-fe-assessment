import { Component, DestroyRef, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NavigationService } from 'src/app/core/services/navigation.service';
import { Navigation } from 'src/app/core/models/navigation.model';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @ViewChildren('details') details!: QueryList<ElementRef>

  coreService = inject(CoreService)
  navigationService = inject(NavigationService)

  navigation$ = this.navigationService.getNavigation()
  destroy$ = inject(DestroyRef)
  isOpened = false

  ngOnInit(): void {
    this.coreService.getSidebarState()
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe(state => this.isOpened = state)
  }

  toggleNavItem(item: Navigation) {
    item.isOpened = !item.isOpened
  }

  closeSidebar() {
    this.coreService.toggleSidebar(false)
    const detailsList = this.details.toArray()
    detailsList.forEach(d => d.nativeElement.open = false)
  }
}
