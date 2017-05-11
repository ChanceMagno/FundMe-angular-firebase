import { Injectable } from '@angular/core';
import { Fundme } from './fundme.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FundmeService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newfundme: Fundme) {
    this.projects.push(newfundme);
  }

  getProjectById(projectId) {
    return this.database.object('projects/' + projectId);
  }
}
