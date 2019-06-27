import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listings-list',
  templateUrl: './listings-list.component.html',
  styleUrls: ['./listings-list.component.scss']
})
export class ListingsListComponent implements OnInit {
  @Input() listingData;
  constructor() { }

  ngOnInit() {
    
    
  }

}
