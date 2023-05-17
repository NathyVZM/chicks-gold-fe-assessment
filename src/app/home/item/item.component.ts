import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({ required: true }) item!: Item
}
