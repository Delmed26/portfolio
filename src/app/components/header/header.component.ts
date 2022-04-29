import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showNavbar : boolean = false;

  ngOnInit(): void {
  }

  showNav() {
    this.showNavbar = !this.showNavbar;
  }

}
