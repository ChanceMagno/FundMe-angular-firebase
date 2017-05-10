import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';
import { Fundme } from '../fundme.model';
import { FundmeService } from '../fundme.service';

@Component({
  selector: 'app-add-fund-me',
  templateUrl: './add-fund-me.component.html',
  styleUrls: ['./add-fund-me.component.css'],
  providers: [FundmeService]
})
export class AddFundMeComponent implements OnInit {
  projectForm: FormGroup;
  categories: string[] = ["Fun", "Tech", "Misc"];
  type: string[] = ["Idea", "Project", "Charitable"];

  constructor(private fb: FormBuilder, private fundmeService: FundmeService) { }


  ngOnInit() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      people: ['', Validators.required],
      description: ['', Validators.required],
      goal: ['', Validators.required],
      moneyDesc: ['', Validators.required],
      rewards: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      video: ['', Validators.required],
    })

  }

  addProject() {
    var {name, people, description, goal, moneyDesc, rewards, category, type, image, date, location, video} = this.projectForm.value;
    var newFundme = new Fundme(name, people, description, goal, moneyDesc, rewards, category, type, image, date, location, video);
    console.log(newFundme);
    this.fundmeService.addProject(newFundme);
    this.projectForm.reset();
  }

}
