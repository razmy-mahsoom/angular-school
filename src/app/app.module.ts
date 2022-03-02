import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component'
import {MatIconModule} from "@angular/material/icon";
import { SinglePaymentComponent } from './single-payment/single-payment.component';
import { GradeMainComponent } from './dashboard/grade-main/grade-main.component';
import { GradeAddComponent } from './dashboard/grade-main/grade-add/grade-add.component';
import { HomeComponent } from './dashboard/home/home.component';
import { GradesComponent } from './dashboard/grade-main/grade-add/grades/grades.component';
import { GradeComponent } from './dashboard/grade-main/grade-add/grades/grade/grade.component';
import {GradeService} from "./dashboard/grade-main/grade.service";
import {FormsModule} from "@angular/forms";
import { ParentsComponent } from './dashboard/parents/parents.component';
import { ParentsAddComponent } from './dashboard/parents/parents-add/parents-add.component';
import { ParentsListComponent } from './dashboard/parents/parents-list/parents-list.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { SmsComponent } from './dashboard/sms/sms.component';
import { SubjectsComponent } from './dashboard/subjects/subjects.component';
import { SubjectListComponent } from './dashboard/subjects/subject-list/subject-list.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { StudentAddComponent } from './dashboard/students/student-add/student-add.component';
import { StudentListComponent } from './dashboard/students/student-list/student-list.component';
import { PaymentsComponent } from './dashboard/payments/payments.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SinglePaymentComponent,
    GradeMainComponent,
    GradeAddComponent,
    HomeComponent,
    GradesComponent,
    GradeComponent,
    ParentsComponent,
    ParentsAddComponent,
    ParentsListComponent,
    SmsComponent,
    SubjectsComponent,
    SubjectListComponent,
    StudentsComponent,
    StudentAddComponent,
    StudentListComponent,
    PaymentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatIconModule,
    FormsModule,
    MatTooltipModule

  ],
  providers: [
    GradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
