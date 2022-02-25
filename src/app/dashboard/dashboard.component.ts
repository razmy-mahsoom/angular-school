import { Component, OnInit } from '@angular/core';
import {PaymentModel} from "../models/payment.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  payments:PaymentModel[] =[
    {id:1,amount:200,date:"21-12-2001",type:"CASH"},
    {id:2,amount:200,date:"21-12-2001",type:"CARD"},
    {id:3,amount:200,date:"21-12-2001",type:"CARD"},
    {id:4,amount:200,date:"21-12-2001",type:"CASH"},
    {id:5,amount:200,date:"21-12-2001",type:"CARD"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
