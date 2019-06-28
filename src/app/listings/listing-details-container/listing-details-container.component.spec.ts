import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsContainerComponent } from './listing-details-container.component';

describe('ListingDetailsContainerComponent', () => {
  let component: ListingDetailsContainerComponent;
  let fixture: ComponentFixture<ListingDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
