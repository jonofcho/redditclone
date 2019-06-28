import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';
import { IRouteParam } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-listings-container',
  templateUrl: './listings-container.component.html',
  styleUrls: ['./listings-container.component.scss']
})
export class ListingsContainerComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute:ActivatedRoute,
    private listingsService:ListingsService,
    private router:Router,
    private snackBar:MatSnackBar,
  ) { }
  public listingData;
  public getListingSub:Subscription;

  ngOnInit() {
    this.getListingSub = this.activatedRoute.params.subscribe((params:IRouteParam) => {
      this.onGetListings(params);
    })
  }

  ngOnDestroy() {
    this.getListingSub.unsubscribe()
  }

  public onGetListings(params? , navQuery? ):void{
    let listingQueryParams = '';
    if(navQuery && navQuery === 'before'){
      listingQueryParams = '&before=' + this.listingData.data.children[0].data.name
    }
    if(navQuery && navQuery === 'after'){
      listingQueryParams = '&after=' + this.listingData.data.children[this.listingData.data.children.length - 1].data.name
    }
    
    this.listingsService.getListings(params.subreddit , listingQueryParams).subscribe((listingData:any) => {
      if(listingData.data.children.length > 0){
        this.listingData = listingData;
      }else{
        this.snackBar.open('No Results Returned', null, {panelClass: 'snackbar-error' ,duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center'});
      }
    })
  }

  public redirectToListingDetail(listingData):void {
      this.router.navigate( [`/${listingData.data.permalink}`])
  }

}
