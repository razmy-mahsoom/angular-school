import {Component, Input, OnInit} from '@angular/core';
import {PaymentModel} from "../models/payment.model";

@Component({
  selector: 'app-single-payment',
  templateUrl: './single-payment.component.html',
  styleUrls: ['./single-payment.component.css']
})
export class SinglePaymentComponent implements OnInit {
  @Input()payment!:PaymentModel;
  constructor() { }

  ngOnInit(): void {
  }

}
