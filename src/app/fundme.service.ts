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

  deleteProject(id) {
    var projectEntryInFirebase = this.getProjectById(id);
    projectEntryInFirebase.remove();
  }

  updateProjectInDatabase(localUpdatedProject, id){
  var projectEntryInFirebase = this.getProjectById(id);
  projectEntryInFirebase.update({
                              name: localUpdatedProject.name,
                              people: localUpdatedProject.people,
                              description: localUpdatedProject.description,
                              goal: localUpdatedProject.goal,
                              moneyDesc: localUpdatedProject.moneyDesc,
                              rewards: localUpdatedProject.rewards,
                              category: localUpdatedProject.category,
                              type: localUpdatedProject.type,
                              image: localUpdatedProject.image,
                              date: localUpdatedProject.date,
                              location: localUpdatedProject.location,
                              video: localUpdatedProject.video,
                            });
                          }
}
