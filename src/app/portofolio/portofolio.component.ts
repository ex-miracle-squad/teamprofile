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
      description: 'Built a high-performance e-commerce platform with integrated inventory management and multiple payment gateways. Designed to scale with growing product catalogs and transaction volumes.',
      image: './assets/images/ecomm.png'
    },
    {
      title: 'Mobile Apps',
      description: 'Developed a mobile application supporting person tracking, on-site point-of-sale (POS) transactions, and real-time field reporting—optimized for field operations and remote workforce management.',
      image: './assets/images/fo.png'
    },
    {
      title: 'ERP System',
      description: 'Delivered a full-featured ERP solution with modules for manufacturing, HRIS, sales, purchasing, inventory, warehouse, and supplier management—streamlining enterprise workflows from production to distribution.',
      image: './assets/images/erp.png'
    },
    {
      title: 'Payment Aggregator',
      description: 'Implemented a payment aggregator platform that connects multiple payment providers, enabling seamless, fast, and secure transaction processing across various channels.',
      image: './assets/images/PG.png'
    },
    {
      title: 'AI Shopping Assistant',
      description: 'Created an AI-powered shopping assistant that enhances user experience with intelligent product recommendations based on real-time user behavior and preferences.',
      image: './assets/images/shopai.png'
    },
    {
      title: 'Point-of-Sale (POS) System',
      description: 'Designed a flexible POS system suitable for both fixed retail locations and mobile selling points, complete with inventory sync, digital receipts, and multi-user support.',
      image: './assets/images/pos.png'
    },
    {
      title: 'Human Resource Management (HRM) System',
      description: 'Built an HRM system covering core HR functions such as employee data management, attendance tracking, payroll processing, and performance evaluation—all in a centralized dashboard.',
      image: './assets/images/hrm.png'
    },
    {
      title: ' Event Ticketing Website',
      description: 'Developed a dynamic event ticketing website that allows organizers to list events, manage ticket sales, and monitor attendance in real-time. Includes admin tools for verification and reporting, with secure payment integration.',
      image: './assets/images/event.png'
    }
  ];
}
