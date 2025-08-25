import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-development-projects',
  templateUrl: './development-projects.component.html',
  styleUrls: ['./development-projects.component.css']
})
export class DevelopmentProjectsComponent implements OnInit {
  @Input() project: Project = {
    name: '',
    img: '',
    technologies: [],
    link: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
