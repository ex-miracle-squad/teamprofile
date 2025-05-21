import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})

export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: "Deza",
      role: "Backend Developer (NodeJS/NestJS)"
    },
    {
      name: "Exsan",
      role: "Full Stack Developer (Frontend-heavy) atau Mobile Developer (React Native)"
    },
    {
      name: "Adzi",
      role: "Full Stack Developer (Polyglot) atau Backend Developer"
    },
    {
      name: "Riki",
      role: "Senior Full Stack Developer atau Software Architect"
    },
    {
      name: "Ridwan",
      role: "Backend Developer (Go/NodeJS) atau Full Stack Developer"
    },
    {
      name: "Grendy",
      role: "Full Stack Developer (JavaScript/NodeJS stack)"
    },
    {
      name: "Surya",
      role: "Full Stack Developer (Laravel + JS stack)"
    },
    {
      name: "Nico",
      role: "Frontend Developer atau React Developer"
    },
    {
      name: "Qodri",
      role: "Frontend Developer (Reactive/SPA) atau JavaScript Developer"
    },
    {
      name: "Baskara",
      role: "Backend Developer (NodeJS/Go)"
    },
    {
      name: "Ramzi",
      role: "Backend Developer (NodeJS/Go)"
    },
    {
      name: "Andre",
      role: "Backend Developer (NodeJS/Go)"
    },
    {
      name: "Ichang",
      role: "Full Stack Developer (NodeJS/Go/PHP, ReactJS/VueJS)"
    },
  ];
  
}
