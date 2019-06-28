import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listings-list',
  templateUrl: './listings-list.component.html',
  styleUrls: ['./listings-list.component.scss']
})
export class ListingsListComponent implements OnInit{
  @Input() listingData;
  @Output() onListingClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  public onListingClickHandler(listingData){
    this.onListingClick.emit(listingData)
  }

}
