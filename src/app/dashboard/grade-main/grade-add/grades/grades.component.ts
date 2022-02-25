import { Component, OnInit } from '@angular/core';
import {Grade} from "./grade/grade.model";
import {GradeService} from "../../grade.service";

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  grades!:Grade[];
  constructor(private gradeService:GradeService) { }

  ngOnInit(): void {
    this.grades = this.gradeService.getGrades();
  }

}
