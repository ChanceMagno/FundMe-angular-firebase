import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';
import { Fundme } from '../fundme.model';

@Component({
  selector: 'app-add-fund-me',
  templateUrl: './add-fund-me.component.html',
  styleUrls: ['./add-fund-me.component.css']
})
export class AddFundMeComponent implements OnInit {
  projectForm: FormGroup;
  categories: string[] = ["Fun", "Tech", "Misc"];
  type: string[] = ["Idea", "Project", "Charitable"];

  constructor() { }


  ngOnInit() {

  }



}
