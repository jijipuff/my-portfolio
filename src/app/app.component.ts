import { Component, OnInit } from '@angular/core';
//can import hammerjs for certain components - mat-slide-toggle, mat-slider etc.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data 
    this.title = "My Portfolio"
  }

}