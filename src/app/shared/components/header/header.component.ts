import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUrl;
  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
    console.log(this.router);
    this.currentUrl = this.router.url;
  }

  public redirectToHome():void {
    this.router.navigate(['/']);
  }
}
