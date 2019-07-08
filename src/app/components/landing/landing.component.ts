import { Component, OnInit } from '@angular/core';
// import { User, Education, Experience, Interest } from 'src/app/models/user.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // user: User;

  // DataUser: User = {
  //   namesurname: "LoremIpsum",
  //   mail: "Lorem@lorem.com",
  //   imageurl: "https://asia.ifoam.bio/wp-content/uploads/2018/12/avatar__181424.png",
  //   brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias natus omnis minus impedit qui aperiam",
  //   github: "www.github.com",

  // }

  


  // UserExperience: Experience = {
  //   companyname: "Lorem Ipsum",
  //   explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias natus omnis minus impedit qui aperiam",
  //   duration: "8 month"
  // }
  // UserInterest: Interest = [
  //   {
  //     interestname: "LoremIpsum",
  //     explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias natus omnis minus impedit qui aperiam"
  //   },
  //   {
  //     interestname: "LoremIpsum",
  //     explanation: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias natus omnis minus impedit qui aperiam"
  //   }
  // ]
  // interestList = new Interest(){interestname:"asd",}


  constructor() { }

  ngOnInit() {
    // debugger
    // // this.DataUser.education = this.UserEducation;
    // // this.DataUser.experience = this.UserExperience;
    // console.log(this.DataUser.interest.push());

  }

}
