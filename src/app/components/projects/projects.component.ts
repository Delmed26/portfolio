import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  cibersecurityProjects: Project[] = [
    {
      name: 'SQL Injection',
      description: 'This project is a SQL injection vulnerability that allows you to execute arbitrary SQL commands on the database.',
      img: 'BitsoAPI',
      technologies: [
        'Flutter'
      ],
      link: 'https://github.com/Delmed26/bitso_api'
    },
    {
      name: 'SQLMap Essentials',
      description: 'This project is a SQL map essential that allows you to map the database and find vulnerabilities.',
      img: 'CineMovies',
      technologies: [
        'Flutter'
      ],
      link: 'https://github.com/Delmed26/cine_movies'
    },
    {
      name: 'SimplePass',
      description: 'This app was created for a project in my university. It is a simple password manager. It uses Xamarin and Firebase for the database.',
      img: 'SimplePass',
      technologies: [
        'Xamarin'
      ],
      link: 'https://github.com/Delmed26/SimplePass'
    }
  ];

  projects: Project[] = [
    {
      name: 'Bitso API',
      description: 'App created to consume the Bitso API, and display the data in a chart. the app uses Flutter and Dart to create the UI. for the API I used the HTTP package and providers.',
      img: 'BitsoAPI',
      technologies: [
        'Flutter'
      ],
      link: 'https://github.com/Delmed26/bitso_api'
    },
    {
      name: 'TheMovieDB API',
      description: 'App that uses the API of TheMovieDB, I am using HeroAnimations, Card swiper and a search field with a debounce functionality. The App uses Flutter and Dart to create the UI.',
      img: 'CineMovies',
      technologies: [
        'Flutter'
      ],
      link: 'https://github.com/Delmed26/cine_movies'
    },
    {
      name: 'SimplePass',
      description: 'This app was created for a project in my university. It is a simple password manager. It uses Xamarin and Firebase for the database.',
      img: 'SimplePass',
      technologies: [
        'Xamarin'
      ],
      link: 'https://github.com/Delmed26/SimplePass'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
