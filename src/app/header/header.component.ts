import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdownOpen = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){ this.closeDropdown();}
    })
  }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle dropdown state
  }

  closeDropdown() {
    this.dropdownOpen = false; // Close dropdown
  }

}
//comment
