import { Component, OnInit } from '@angular/core';
import { Fundme } from '../fundme.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
