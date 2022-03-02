import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GradeMainComponent} from "./dashboard/grade-main/grade-main.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {ParentsComponent} from "./dashboard/parents/parents.component";
import {ParentsAddComponent} from "./dashboard/parents/parents-add/parents-add.component";
import {ParentsListComponent} from "./dashboard/parents/parents-list/parents-list.component";
import {SmsComponent} from "./dashboard/sms/sms.component";
import {SubjectsComponent} from "./dashboard/subjects/subjects.component";
import {StudentsComponent} from "./dashboard/students/students.component";
import {StudentAddComponent} from "./dashboard/students/student-add/student-add.component";
import {StudentListComponent} from "./dashboard/students/student-list/student-list.component";
import {PaymentsComponent} from "./dashboard/payments/payments.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'class',component:GradeMainComponent},
      {path:'parents',component:ParentsComponent, children:[
          {path:'',component:ParentsAddComponent},
          {path:'parents-list',component:ParentsListComponent}
        ]},
      {path:'sms',component:SmsComponent},
      {path:'subjects',component:SubjectsComponent},
      {path:'students',component:StudentsComponent, children:[
          {path: '',component: StudentAddComponent},
          {path: 'student-list',component: StudentListComponent}
        ]},
      {path:'payments',component:PaymentsComponent}


    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
