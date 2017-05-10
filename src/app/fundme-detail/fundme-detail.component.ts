import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundme } from '../fundme.model';
import { FundmeService } from '../fundme.service';

@Component({
  selector: 'app-fundme-detail',
  templateUrl: './fundme-detail.component.html',
  styleUrls: ['./fundme-detail.component.css'],
  providers: [FundmeService]
})
export class FundmeDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundmeService: FundmeService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.fundmeService.getProjectById(this.projectId);
  }

}
