import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsContainerComponent } from './listings-container/listings-container.component';
import { ListingsRoutingModule } from './listings-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListingsListComponent } from './listings-list/listings-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { ListingComponent } from './listing/listing.component';
import { ListingDetailsContainerComponent } from './listing-details-container/listing-details-container.component';
import { ListingDetailsCommentsComponent } from './listing-details-comments/listing-details-comments.component';

@NgModule({
  declarations: [
    ListingsContainerComponent,
    ListingsListComponent,
    ListingComponent,
    ListingDetailsContainerComponent,
    ListingDetailsCommentsComponent,
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [

  ]
})
export class ListingsModule { }
