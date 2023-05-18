import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { AsideModule } from './aside/aside.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    AsideModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    AsideModule
  ]
})
export class SharedModule { }
