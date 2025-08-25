import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-cibersecurity-projects',
  templateUrl: './cibersecurity-projects.component.html',
  styleUrls: ['./cibersecurity-projects.component.css']
})
export class CibersecurityProjectsComponent implements OnInit {
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
