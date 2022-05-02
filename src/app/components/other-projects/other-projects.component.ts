import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css']
})
export class OtherProjectsComponent implements OnInit {
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
