import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  coreService = inject(CoreService)
  destroy$ = inject(DestroyRef)
  isOpened = false

  ngOnInit(): void {
    this.coreService.getSidebarState()
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe(state => this.isOpened = state)
  }
}
