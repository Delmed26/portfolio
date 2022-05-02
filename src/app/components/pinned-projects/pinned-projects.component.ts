import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-pinned-projects',
  templateUrl: './pinned-projects.component.html',
  styleUrls: ['./pinned-projects.component.css']
})
export class PinnedProjectsComponent implements OnInit {
  @Input() project: Project = {
    name: '',
    description: '',
    img: '',
    technologies: [],
    link: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
