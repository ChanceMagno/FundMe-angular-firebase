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

projectForm: FormGroup;
projectId: string;
projectToDisplay: Fundme;

  constructor (private fb: FormBuilder,
    private fundmeService: FundmeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

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
                                          console.log(this.projectToDisplay);

    })

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
    // console.log(this.projectId);
    // console.log(this.projectToDisplay);
  }

  updateProject(){
    console.log(this.projectToDisplay.name);
  }

}
