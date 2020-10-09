import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[];
  constructor() { 
    this.students = [
      {id: "1273", name:"Tareq", major:"Computer Engineering", average:94 },
      {id: "1255", name:"Tala", major:"Computer Science", average:74 },
      {id: "1251", name:"Ahmad", major:"Computer Engineering", average:80 },
      {id: "1071", name:"Yousef", major:"Biology", average:99 },
      {id: "1379", name:"Bilal", major:"Computer Engineering", average:97 },
      {id: "1402", name:"Aya", major:"Medicine", average:84 },     
      {id: "1407", name:"Ali", major:"IT", average:73 },     
    ];
  }

  ngOnInit(): void {
  }

}
