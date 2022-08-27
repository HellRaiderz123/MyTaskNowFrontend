import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Project} from '../projectService/project.model';

@Injectable({
  providedIn: 'root'
})
export class TaskProjectService {

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get<Array<Project>>('https://mytasknow-co.herokuapp.com/api/v1/projects');
  }
}
