import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listing-details-container',
  templateUrl: './listing-details-container.component.html',
  styleUrls: ['./listing-details-container.component.scss']
})
export class ListingDetailsContainerComponent implements OnInit {
  public getListingDetailsSub:Subscription
  // op = original post
  public opData:any;
  public comments:any;
  constructor(
    private router:Router,
    private listingService:ListingsService,
  ) { }

  ngOnInit() {
    this.getListingDetails()

  }
  ngOnDestroy() {

  }

  public getListingDetails():void{
    this.listingService.getListingDetails(this.router.url).subscribe(ldd => {
      // ldd = listingdetailsdata
      this.opData = ldd[0].data.children[0].data;
      this.comments = ldd[1].data.children;
      console.log(ldd);
      
    })
  }

}
