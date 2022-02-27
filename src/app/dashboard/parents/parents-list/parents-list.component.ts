import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ParentModel} from "../parent.model";

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.css']
})
export class ParentsListComponent implements OnInit {
  parents:ParentModel[]=[
    new ParentModel('Wasantha','8628545v','wasantha@gmail.com','1234',94778488662,123,123),
  ];
  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  onBack() {
    this.location.back();
  }
}
