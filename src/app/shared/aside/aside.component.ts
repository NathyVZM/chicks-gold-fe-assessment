import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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
  }
}
