import { Component, OnInit } from '@angular/core';
import { Fundme } from '../fundme.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { FundmeService } from '../fundme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FundmeService]
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fundmeService: FundmeService) { }

  ngOnInit() {
    this.projects = this.fundmeService.getProjects();
  }

  goToProjectDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
