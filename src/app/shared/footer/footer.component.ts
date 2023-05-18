import { Component, inject } from '@angular/core';
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
}
