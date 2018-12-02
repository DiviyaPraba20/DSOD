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
          { title: 'Latest', link: 'latest' },
          { title: 'Articles', link: 'articles' },
          { title: 'Videos', link: 'videos' },
          { title: 'Podcasts', link: 'pdcasts' },
          { title: 'Visual Essay', link: 'vEssay' },
          { title: 'Events', link: 'events' }
        ]
      },
      {
        title: 'Careers',
        link: 'careers',
        children: [
          { title: 'My Jobs', link: 'my-jobs' },
          { title: 'Job Alerts', link: 'job-alerts' },
          { title: 'Search', link: 'search' }
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
              { title: 'iTero Protocols', link: 'protocols' },
              { title: 'Invisalign Processes', link: 'processes' },
              { title: 'Practice Building', link: 'practiceBuilding' }
            ]
          },
          {
            title: 'GlaxoSmithKline',
            link: 'sponsers',
            children: [
              { title: 'Oral Health', link: 'oralHealth' },
              { title: 'Denture Care', link: 'dentureCare' },
              { title: 'Gingival Care', link: 'givingValcare' }
            ]
          },
          {
            title: 'Nobel Biocare, N.A',
            link: 'sponsers',
            children: [
              { title: 'Implant Therapy', link: 'implantTherapy' },
              { title: 'Diagnosis & Treatment', link: 'diagnosisTreament' },
              { title: 'Site Development', link: 'siteDevelopment' },
              { title: 'Implant Practice', link: 'implantPractice' }
            ]
          }
        ]
      },
      {
        title: 'DSO Practice',
        link: 'practice',
        children: [
          { title: 'Resources', link: 'recorcers' },
          { title: 'Legislation', link: 'legislation' }
        ]
      },
      {
        title: 'Development',
        link: 'development',
        children: [
          { title: 'My CE', link: 'myCE' },
          { title: 'Learning Tracks', link: 'learningTracks' }
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
