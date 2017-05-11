import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundme } from '../fundme.model';
import { FundmeService } from '../fundme.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-fund-me',
  templateUrl: './edit-fund-me.component.html',
  styleUrls: ['./edit-fund-me.component.css'],
  providers: [FundmeService]
})
export class EditFundMeComponent implements OnInit {
  categories: string[] = ["Fun", "Tech", "Misc"];
  type: string[] = ["Idea", "Project", "Charitable"];
  projectForm: FormGroup;
  projectId: string;
  projectToDisplay: Fundme;

  constructor (
      private fb: FormBuilder,
      private fundmeService: FundmeService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
      console.log(this.projectId);
    });
    this.fundmeService.getProjectById(this.projectId).subscribe(dataLastSeen => {
      this.projectToDisplay = new Fundme(dataLastSeen.name,
                                          dataLastSeen.people,
                                          dataLastSeen.description,
                                          dataLastSeen.goal,
                                          dataLastSeen.moneyDesc,
                                          dataLastSeen.rewards,
                                          dataLastSeen.category,
                                          dataLastSeen.type,
                                          dataLastSeen.image,
                                          dataLastSeen.date,
                                          dataLastSeen.location,
                                          dataLastSeen.video)

      this.setForm(dataLastSeen.name,
              dataLastSeen.people,
              dataLastSeen.description,
              dataLastSeen.goal,
              dataLastSeen.moneyDesc,
              dataLastSeen.rewards,
              dataLastSeen.category,
              dataLastSeen.type,
              dataLastSeen.image,
              dataLastSeen.date,
              dataLastSeen.location,
              dataLastSeen.video)


    })
    this.projectForm = this.fb.group({
      name: [ Validators.required],
      people: [ Validators.required],
      description: [ Validators.required],
      goal: [ Validators.required],
      moneyDesc: [ Validators.required],
      rewards: [ Validators.required],
      category: [ Validators.required],
      type: [ Validators.required],
      image: [ Validators.required],
      date: [ Validators.required],
      location: [ Validators.required],
      video: [ Validators.required],
    })
    // console.log(this.projectId);
    // console.log(this.projectToDisplay);
  }

  updateProject(){
    var {name, people, description, goal, moneyDesc, rewards, category, type, image, date, location, video} = this.projectForm.value;
    var projectUpdate = new Fundme(name, people, description, goal, moneyDesc, rewards, category, type, image, date, location, video);
    this.fundmeService.updateProjectInDatabase(projectUpdate, this.projectId);

    console.log(projectUpdate);
  }

  setForm(name: string, people: string, description: string, goal: number, moneyDesc: string, rewards: string, category: string, type: string, image: string, date: string, location: string, video: string){

    this.projectForm.controls['name'].setValue(name);
    this.projectForm.controls['people'].setValue(people);
    this.projectForm.controls['description'].setValue(description);
    this.projectForm.controls['goal'].setValue(goal);
    this.projectForm.controls['moneyDesc'].setValue(moneyDesc);
    this.projectForm.controls['rewards'].setValue(rewards);
    this.projectForm.controls['category'].setValue(category);
    this.projectForm.controls['type'].setValue(type);
    this.projectForm.controls['image'].setValue(image);
    this.projectForm.controls['date'].setValue(date);
    this.projectForm.controls['location'].setValue(location);
    this.projectForm.controls['video'].setValue(video);
  }

  deleteProj() {
    if(confirm("Are you sure you want to delete this project?")){
      this.fundmeService.deleteProject(this.projectId);
    }
  }

}
