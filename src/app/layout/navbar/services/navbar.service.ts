import { Injectable } from '@angular/core';
import { Navigation } from '../models/navigation.model';

Injectable({ providedIn: 'root' });

export class NavbarService {
  getNavItems(): Navigation[] {
    return [
      { title: 'Home', link: './' },
      {
        title: 'Education',
        link: 'education',
        children: [
          { title: 'Latest', link: 'eductaion' },
          { title: 'Articles', link: 'eductaion' },
          { title: 'Videos', link: 'eductaion' },
          { title: 'Podcasts', link: 'eductaion' },
          { title: 'Visual Essay', link: 'eductaion' },
          { title: 'Events', link: 'eductaion' }
        ]
      },
      {
        title: 'DSO Practice',
        link: 'practice',
        children: [
          { title: 'Resources', link: 'practice' },
          { title: 'Legislation', link: 'practice' }
        ]
      },
      {
        title: 'From Our Sponsers',
        link: 'sponsers',
        children: [
          {
            title: 'Align Technology, Inc',
            link: 'sponsers',
            children: [
              { title: 'iTero Protocols', link: 'sponsers' },
              { title: 'Invisalign Processes', link: 'sponsers' },
              { title: 'Practice Building', link: 'sponsers' }
            ]
          },
          {
            title: 'GlaxoSmithKline',
            link: 'sponsers',
            children: [
              { title: 'Oral Health', link: 'sponsers' },
              { title: 'Denture Care', link: 'sponsers' },
              { title: 'Gingival Care', link: 'sponsers' }
            ]
          },
          {
            title: 'Nobel Biocare, N.A',
            link: 'sponsers',
            children: [
              { title: 'Implant Therapy', link: 'sponsers' },
              { title: 'Diagnosis & Treatment', link: 'sponsers' },
              { title: 'Site Development', link: 'sponsers' },
              { title: 'Implant Practice', link: 'sponsers' }
            ]
          }
        ]
      },
      {
        title: 'Development',
        link: 'development',
        children: [
          { title: 'My CE', link: 'development' },
          { title: 'Learning Tracks', link: 'development' }
        ]
      },
      {
        title: 'Community',
        link: 'community',
        children: [
          { title: 'Messaging / Wall?', link: 'community' },
          { title: 'eNewsletter', link: 'community' },
          { title: 'UNITE Magazine', link: 'community' }
        ]
      }
    ];
  }
}
