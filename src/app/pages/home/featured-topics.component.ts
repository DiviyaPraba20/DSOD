import { Component } from "@angular/core";

@Component({
  selector: 'dsod-featured-topics',
  templateUrl: './featured-topics.component.html',
  styleUrls: ['./featured-topics.component.scss']
})
export class DSOFeaturedTopicsComponent {
  topics= [
    {
      title: 'Orthodontics',
      summary: 'Role of Invisalign® Outcome Simulator in Patient Engagement',
      by: ' DSODentist',
      image: '/assets/images/featured-sm.png',
      icon: '/assets/images/file-icon.png',
      description: 'This module will present best practices that allow you to use Invisalign outcome simulator in your practice…',
    },
    {
      title: 'Practice Management',
      summary: 'Reducing Employee Turnover in the DSO',
      by: ' DSODentist',
      image: '/assets/images/featured-sm2.png',
      icon: '/assets/images/file-icon.png',
      description: 'Many practices are finding it more difficult to retail staff as the economy and dental marketplace continues to…',
    },
    {
      title: 'Practice Management',
      summary: 'Eliminating Cancellations and No-Shows in Your DSO Practice',
      by: ' DSODentist',
      icon: '/assets/images/file-icon.png',
      description: 'The most vital step to keeping no-shows and cancellations to a minimum is simply by talking with patients while they are in the office and working to be complete the job… ',
    },
    {
      title: 'General Dentistry',
      summary: 'Lifelong Learning in the DSO Practice',
      by: ' DSODentist',
      icon: '/assets/images/youtube-icon.png',
      description: 'The pursuit of perfessional knowledge enhances social inclusion, peer-to-peer learning, and personal connection. We provide you the best lessons to be…',
    }
  ]
  constructor() {}
}