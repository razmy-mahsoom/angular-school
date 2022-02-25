import {Grade} from "./grade-add/grades/grade/grade.model";

export class GradeService{
  grades:Grade[] =[
    new Grade('A','A-Class',25),
    new Grade('B','B-Class',35),
    new Grade('C','C-Class',28),
    new Grade('D','D-Class',36),
    new Grade('E','E-Class',49)
  ];

  public getGrades():Grade[]{
    return this.grades;
  }

  public addGrade(grade:Grade):void{
    this.grades.push(grade);
  }
}
