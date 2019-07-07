import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data = {
    abilities: ['C#', 'Css', 'Html', '.Net Mvc', 'Javascript', 'Jquery', 'React', 'Angular'],
    sociallinks: ['www.facebook.com', 'www.twitter.com', 'www.github.com', 'www.linkedin.com']
  }

  constructor() { }

  ngOnInit() {

  }

}
