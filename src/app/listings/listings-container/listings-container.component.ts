import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from 'src/app/services/listings.service';
import { IRouteParam } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-listings-container',
  templateUrl: './listings-container.component.html',
  styleUrls: ['./listings-container.component.scss']
})
export class ListingsContainerComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private listingsService:ListingsService,
  ) { }
  public listingData;

  ngOnInit() {
    console.log(this.activatedRoute.params);
    this.activatedRoute.params.subscribe((params:IRouteParam) => {
      this.listingsService.getListings(params.subreddit).subscribe(listingData => {
        console.log(listingData);
        
        this.listingData = listingData;
      })
    })

    
  }

}
