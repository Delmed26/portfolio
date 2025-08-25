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
      description: 'This exercise demonstrates the critical importance of input validation. A simple unprotected search field can lead to a complete database compromise. Code-level remediation is the only effective solution.',
      img: 'sql_injection',
      technologies: [
        'SQL Injection',
        'UNION-based',
        'Data Exfiltration',
      ],
      link: 'https://github.com/Delmed26/AppSec-portfolio/blob/b162dc058de9e51560a71223f85613b42fc0c001/write-ups/SQL-Injection/README.md'
    },
    {
      name: 'SQLMap Essentials',
      description: 'The ability to automate the detection and exploitation of SQLi vulnerabilities with SQLMap—from enumerating databases and tables to extracting sensitive data—is a key competency for penetration testing. This module has provided me with a solid foundation upon which I will continue to build my skills in identifying, assessing, and mitigating these types of risks in real-world applications. Without a doubt, this was an essential and directly applicable learning experience for my professional development in the field of offensive security.',
      img: 'sqlmap',
      technologies: [
        'SQLi Detection',
        'SQLMap',
        'Data exfiltration'
      ],
      link: 'https://github.com/Delmed26/AppSec-portfolio/blob/b162dc058de9e51560a71223f85613b42fc0c001/write-ups/SQLMap-Essentials/README.md'
    },
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
