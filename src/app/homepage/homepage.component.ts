import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage: string;
  colors: string[];
  hasCountdown?: boolean;
  countdown?: { days: number; hours: number; minutes: number; seconds: number };
  discount?: string;
}

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  hours: string;
  image: string;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  activeTab = 'hongkong';
  link: string = 'info@fashionshop.com';

  products: Product[] = [
    {
      id: '1',
      name: 'Ribbed Tank Top',
      price: 16.95,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/716931990c3baf094afff366a31670ef7e466ae7?width=675',
      hoverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3eaabd903e6e510f9c77de4778a65e7d72451673?width=675',
      colors: ['#FFA500', '#000', '#FFF'],
      hasCountdown: true,
      countdown: { days: 11, hours: 15, minutes: 51, seconds: 36 },
      discount: '-33%'
    },
    {
      id: '2',
      name: 'Ribbed modal T-shirt',
      price: 18.95,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/1a1e49c889334afaf787312a9189f12b5488421a?width=675',
      hoverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3eaabd903e6e510f9c77de4778a65e7d72451673?width=675',
      colors: ['#977945', '#D966D9']
    },
    {
      id: '3',
      name: 'Oversized Printed T-shirt',
      price: 10.00,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/7d691a7f66453bc1698a3c0653a9b22adc722004?width=675',
      hoverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3eaabd903e6e510f9c77de4778a65e7d72451673?width=675',
      colors: []
    },
    {
      id: '4',
      name: 'Oversized Printed T-shirt',
      price: 16.95,
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e2c27949856b7601f5bf88f9c185ade0279c086b?width=675',
      hoverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3eaabd903e6e510f9c77de4778a65e7d72451673?width=675',
      colors: ['#FFF', '#D966D9', '#000']
    }
  ];

  stores: StoreLocation[] = [
    {
      id: 'hongkong',
      name: 'Hongkong Store',
      address: '301 Front St W\nToronto,',
      email: 'Ecomus@support.com',
      phone: '(08) 8942 1299',
      hours: 'Mon - Fri, 8:30am - 10:30pm\nSaturday, 8:30am - 10:30pm\nSunday Closed',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8eb7f334d6ef804c2925ed804defec1944afc0b8?width=1410'
    },
    {
      id: 'london',
      name: 'London Store',
      address: '301 Front St W\nLondon,',
      email: 'Ecomus@support.com',
      phone: '(08) 8942 1299',
      hours: 'Mon - Fri, 8:30am - 10:30pm\nSaturday, 8:30am - 10:30pm\nSunday Closed',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8eb7f334d6ef804c2925ed804defec1944afc0b8?width=1410'
    },
    {
      id: 'paris',
      name: 'Paris Store',
      address: '301 Front St W\nParis,',
      email: 'Ecomus@support.com',
      phone: '(08) 8942 1299',
      hours: 'Mon - Fri, 8:30am - 10:30pm\nSaturday, 8:30am - 10:30pm\nSunday Closed',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8eb7f334d6ef804c2925ed804defec1944afc0b8?width=1410'
    }
  ];

  get activeStore(): StoreLocation {
    return this.stores.find(s => s.id === this.activeTab) || this.stores[0];
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
