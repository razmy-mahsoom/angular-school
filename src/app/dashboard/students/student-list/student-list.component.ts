import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: { adminNo: number, fullName: string, email: string, contactNo: number }[] = [
    {'adminNo':1,fullName:'name',email:'test@gmail.com',contactNo:321}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPayment() {
    //this.router.navigate(['../payments'])
  }
}
