export class Grade{
  gradeName:string;
  gradeDescription:string;
  noOfStudent:number;

  constructor(gradeName: string, gradeDescription: string, noOfStudent: number) {
    this.gradeName = gradeName;
    this.gradeDescription = gradeDescription;
    this.noOfStudent = noOfStudent;
  }
}
