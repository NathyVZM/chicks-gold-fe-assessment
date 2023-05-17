import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
