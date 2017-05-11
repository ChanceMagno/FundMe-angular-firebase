import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Fundme } from '../fundme.model';
import { FundmeService } from '../fundme.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fundme-detail',
  templateUrl: './fundme-detail.component.html',
  styleUrls: ['./fundme-detail.component.css'],
  providers: [FundmeService]
})
export class FundmeDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay: Fundme;
  url;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundmeService: FundmeService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.fundmeService.getProjectById(this.projectId).subscribe(dataLastSeen => {
      this.projectToDisplay = new Fundme(
        dataLastSeen.name,
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
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectToDisplay.video)
  })

}
  editProject(){
    this.router.navigate(['projects/edit/',this.projectId]);
  }
}
