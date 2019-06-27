import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsContainerComponent } from './listings-container/listings-container.component';
import { ListingsRoutingModule } from './listings-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListingsListComponent } from './listings-list/listings-list.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    ListingsContainerComponent,
    ListingsListComponent,
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ListingsModule { }
