import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pinnedProjects: Project[] = [
    {
      name: 'Pinned Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'Cryptobox',
      technologies: [
        'HTML', 'CSS'
      ],
      link: ''
    },
    {
      name: 'Pinned Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'Cryptobox',
      technologies: [
        'Flutter'
      ],
      link: ''
    },
    {
      name: 'Pinned Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'Cryptobox',
      technologies: [
        'Xamarin'
      ],
      link: ''
    }
  ];

  projects: Project[] = [
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'Xamarin'
      ],
      link: ''
    },
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'Flutter'
      ],
      link: ''
    },
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'Xamarin'
      ],
      link: ''
    },
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'Xamarin'
      ],
      link: ''
    },
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'HTML', 'CSS'
      ],
      link: ''
    },
    {
      name: 'Project 1',
      img: 'Cryptobox',
      technologies: [
        'Flutter'
      ],
      link: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
