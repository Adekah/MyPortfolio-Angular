import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  user: {} = {
    nameSurname: "Huseyin Adeka",
    brief: "Lorem",
    githubUrl: "https://www.google.com.tr",
    imageUrl: "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png",
    

  }

  ExperianceList: Array<{company:string,duration:string,explanation:string}> = [
    { company: "Lorem", duration: "6 months", explanation: "Lorem1" },
    { company: "Lorem2", duration: "61 months", explanation: "Lorem1" },
    { company: "Lorem3", duration: "62 months", explanation: "Lorem1" },
    { company: "Lorem4", duration: "63 months", explanation: "Lorem1" },
  ]

  

  ngOnInit() {
    
    console.log(this.ExperianceList);
  }

}
