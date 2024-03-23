import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageUrl = "assets/images/Petrichor _logo1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
