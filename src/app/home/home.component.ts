import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrl = "assets/Petrichor _logo1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
