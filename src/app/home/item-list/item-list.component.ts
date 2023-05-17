import { Component, inject } from '@angular/core';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  itemService = inject(ItemService)
  items$ = this.itemService.getItems()
}
