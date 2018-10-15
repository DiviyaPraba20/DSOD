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
        title: 'DDO Practice',
        link: 'practice'
      },
      {
        title: 'Form Our Sponsers',
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
