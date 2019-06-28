import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-details-comments',
  templateUrl: './listing-details-comments.component.html',
  styleUrls: ['./listing-details-comments.component.scss']
})
export class ListingDetailsCommentsComponent implements OnInit {
  public _comments;
  @Input() set comments(comments){
    this._comments = comments.filter(x => x.kind !== 'more').map(c => c.data)
  }
  get comments(){
    return this._comments;
  }
  constructor() { }

  ngOnInit() {

    
    
  }

}
