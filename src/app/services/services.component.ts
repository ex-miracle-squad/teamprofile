import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface OurService {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {
  ourServices: OurService[] = [
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, including web and mobile applications.',
      icon: 'fas fa-code'
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration, management, and optimization services to enhance your business operations.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Data Analytics',
      description: 'Transforming data into actionable insights with advanced analytics and reporting tools.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance on technology strategy, implementation, and optimization for your business.',
      icon: 'fas fa-comments'
    }
  ]
}
