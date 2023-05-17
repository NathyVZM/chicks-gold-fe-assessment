import { Component, inject } from '@angular/core';
import { Navigation } from 'src/app/core/models/navigation.model';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currencyService = inject(CurrencyService)
  navigationService = inject(NavigationService)

  currencies$ = this.currencyService.getCurrencies()
  items$ = this.navigationService.getNavigation()
  isOpened = false

  toggleNavItem(item: Navigation) {
    item.isOpened = !item.isOpened
  }

  toggleCurrency() {
    this.isOpened = !this.isOpened
  }
}
