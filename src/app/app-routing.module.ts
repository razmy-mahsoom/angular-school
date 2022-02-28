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
      {path:'subjects',component:SubjectsComponent}

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
