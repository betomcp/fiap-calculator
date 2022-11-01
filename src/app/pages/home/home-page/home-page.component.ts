import { Component, DoCheck, OnInit } from '@angular/core';
import { FiapSubject } from 'src/app/model/subject-model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, DoCheck {

  // public subject: FiapSubject = new FiapSubject;
  public subjects: FiapSubject[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  public newSubject(){
    this.subjects.push(new FiapSubject())
  }

}
