import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsCommentsComponent } from './listing-details-comments.component';

describe('ListingDetailsCommentsComponent', () => {
  let component: ListingDetailsCommentsComponent;
  let fixture: ComponentFixture<ListingDetailsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
