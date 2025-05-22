import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Portofolio {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.scss'
})
export class PortofolioComponent {
  portofolios: Portofolio[] = [
    {
      title: 'E-commerce Platform',
      description: 'Developed a scalable online store with integrated payment and inventory management.',
      image: 'https://storage.googleapis.com/a1aa/image/cad2ff30-480c-4059-c9a9-35c3070cc4f9.jpg'
    },
    {
      title: 'Mobile Apps',
      description: 'Created a mobile application for person tracking, point-of-sale (POS) systems, and field agents reporting.',
      image: 'https://storage.googleapis.com/a1aa/image/cad2ff30-480c-4059-c9a9-35c3070cc4f9.jpg'
    },
    {
      title: 'ERP System',
      description: 'Developed an ERP system with modules for manufacturing, HRIS, sales, purchasing, inventory, warehouse, and supplier management.',
      image: 'https://storage.googleapis.com/a1aa/image/cad2ff30-480c-4059-c9a9-35c3070cc4f9.jpg'
    },
    {
      title: 'Payment Aggregator',
      description: 'Implemented a payment aggregator system to unify multiple payment gateways and provide seamless transaction processing.',
      image: 'https://storage.googleapis.com/a1aa/image/cad2ff30-480c-4059-c9a9-35c3070cc4f9.jpg'
    },
    {
      title: 'AI Shopping Assistant',
      description: 'Built an AI-powered shopping assistant to provide personalized product recommendations and streamline the shopping experience.',
      image: 'https://storage.googleapis.com/a1aa/image/cad2ff30-480c-4059-c9a9-35c3070cc4f9.jpg'
    }
  ];
}
