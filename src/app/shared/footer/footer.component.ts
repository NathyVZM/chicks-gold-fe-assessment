import { Component, inject } from '@angular/core';
import { Navigation } from 'src/app/core/models/navigation.model';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  navigationService = inject(NavigationService)
  items$ = this.navigationService.getFooter()
  year = new Date().getFullYear()

  toggleDropdown(item: Navigation) {
    item.isOpened = !item.isOpened
  }
}
