import { Component, OnInit } from '@angular/core';
import { Fundme } from '../fundme.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { FundmeService } from '../fundme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FundmeService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private fundmeService: FundmeService) { }

  ngOnInit() {
    this.projects = this.fundmeService.getProjects();
  }

  // goToProjectDetailPage(clickedProject: Fundme) {
  //   this.router.navigate(['projects', clickedProject.id]);
  // }
}
