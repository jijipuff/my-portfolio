import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title: string;
  projects: any[];


  constructor() { }

  ngOnInit() {
    this.title = 'This is my portfolio';
      //for the moment this is fake data, hard-coded
    this.projects = [
      {id: 1, title: 'Project 1', date: (2002)},
      {id: 2, title: 'Project 2', date: (2004)},
      {id: 3, title: 'Project 3', date: (2008)},
      {id: 4, title: 'Project 4', date: (2010)},
    ];
  }

}
