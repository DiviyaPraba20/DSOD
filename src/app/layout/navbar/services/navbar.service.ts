import { Injectable } from '@angular/core';
import { Navigation } from '../models/navigation.model';

Injectable({ providedIn: 'root' });

export class NavbarService {
  getNavItems(): Navigation[] {
    return [
      {
        title: 'Home',
        link: './'
      },
      {
        title: 'Education',
        link: 'education'
      },
      {
        title: 'DSO Practice',
        link: 'practice'
      },
      {
        title: 'From Our Sponsers',
        link: 'sponsers'
      },
      {
        title: 'Development',
        link: 'development'
      },
      {
        title: 'Community',
        link: 'community'
      }
    ];
  }
}
