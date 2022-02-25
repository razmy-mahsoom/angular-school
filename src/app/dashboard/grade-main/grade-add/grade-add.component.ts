import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GradeService} from "../grade.service";
import {Grade} from "./grades/grade/grade.model";

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private gradeService:GradeService) { }

  ngOnInit(): void {
  }

  onSave(name: HTMLInputElement, description: HTMLInputElement, no: HTMLInputElement) {
    let grade:Grade = new Grade(name.value,description.value,+no.value);
    this.gradeService.addGrade(grade);
    name.value='';
    description.value='';
    no.value ='';
  }
}
