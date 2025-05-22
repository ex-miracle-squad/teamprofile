import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OurExpertise {
  title: string;
  description: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})

export class TeamComponent {
  ourExpertise: OurExpertise[] = [
    {
      title: "Backend Development",
      description: "We specialize in building robust and scalable backend systems using NodeJS, Go, and PHP. Our expertise includes RESTful APIs, microservices architecture, and database management."
    },
    {
      title: "Frontend Development",
      description: "Our team excels in creating dynamic and responsive user interfaces using modern JavaScript frameworks like ReactJS and VueJS. We focus on delivering seamless user experiences."
    },
    {
      title: "Mobile Development",
      description: "We develop cross-platform mobile applications using React Native, ensuring a consistent experience across iOS and Android devices. Additionally, we build native mobile apps using Kotlin for Android and Swift for iOS to deliver high-performance solutions."
    },
    {
      title: "Full Stack Development",
      description: "Our team is proficient in both frontend and backend development, enabling us to deliver end-to-end solutions tailored to your needs."
    },
    {
      title: "DevOps",
      description: "We implement CI/CD pipelines, containerization with Docker, and cloud deployment strategies to ensure smooth development and deployment processes."
    },
    {
      title: "Database Design and Administration",
      description: "We offer expertise in designing efficient and scalable database schemas, optimizing queries, and managing database systems. Our team is experienced with relational databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB and Cassandra."
    }
  ];

  selectedExpertise: OurExpertise | null = null;
  showDetails: boolean = false;

  showExpertiseDetails(expertise: OurExpertise) {
    this.selectedExpertise = expertise;
    this.showDetails = true;
  }
  
  hideExpertiseDetails() {
    this.selectedExpertise = null;
    this.showDetails = false;
  }
  
}
