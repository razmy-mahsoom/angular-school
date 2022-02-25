import {Component, Input, OnInit} from '@angular/core';
import {Grade} from "./grade.model";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  @Input()grade!:Grade;
  constructor() { }

  ngOnInit(): void {
  }

}
