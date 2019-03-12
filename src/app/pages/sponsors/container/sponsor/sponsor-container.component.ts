import { Component, OnInit, OnDestroy } from '@angular/core';
import { DSODSliderContent } from 'src/app/shared/models';
import { DSODContentType } from 'src/app/core/models/content';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dsod-sponsor-page',
  templateUrl: './sponsor-container.component.html',
  styleUrls: ['./sponsor-container.component.scss']
})
export class DSODSponsorContainerComponent implements OnInit {
  sponsorName: any;
  //ALN banners contets
  ALNcontents: DSODSliderContent[] = [
    {
      title: 'Assessment of the Implant Patient:',
      description: 'Review criteria for DSO dentists',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/align-banner-1.png',
      url: '',
      logo: 'assets/images/sponsor-images/ALN-logo-white.png',
      sponsoredBy: 'Sponsored content from Align',
      filterby: 'ALN'
    },
    {
      title: 'Interproximal Reduction',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/align-banner-2.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/ALN-logo-white.png',
      sponsoredBy: 'Sponsored content from Align',
      filterby: 'ALN'
    },
    {
      title: 'Correcting a Class II Teen Patient Using Elastic Simulation',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/align-banner-3.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/ALN-logo-white.png',
      sponsoredBy: 'Sponsored content from Align',
      filterby: 'ALN'
    },
    {
      title: 'Optimized New Consumer Exam',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/align-banner-4.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/ALN-logo-white.png',
      sponsoredBy: 'Sponsored content from Align',
      filterby: 'ALN'
    }
  ];
  // GSK Banners Contents
  GSKcontents: DSODSliderContent[] = [
    {
      title: 'Dentin Hypersensitivity:',
      description: 'Your refrence to the hydrodynamic theory',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/gsk-banner-1.png',
      url: '',
      logo: 'assets/images/gsk-icon-sm.png',
      sponsoredBy: 'Sponsored content from GlaxoSmithKline',
      filterby: 'GSK'
    },
    {
      title: 'Edentulism and the Denture Patient Journey',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/gsk-banner-2.jpg',
      url: '',
      logo: 'assets/images/gsk-icon-sm.png',
      sponsoredBy: 'Sponsored content from GlaxoSmithKline',
      filterby: 'GSK'
    },
    {
      title: 'Impact of Dentin Hypersensitivity on Patient Quality of Life',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/gsk-banner-3.jpg',
      url: '',
      logo: 'assets/images/gsk-icon-sm.png',
      sponsoredBy: 'Sponsored content from GlaxoSmithKline',
      filterby: 'GSK'
    },
    {
      title: 'Prevention and Management Techniques for Acid Erosion',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/gsk-banner-4.jpg',
      url: '',
      logo: 'assets/images/gsk-icon-sm.png',
      sponsoredBy: 'Sponsored content from GlaxoSmithKline',
      filterby: 'GSK'
    }
  ];

  //NBL banners contents

  NBLcontents: DSODSliderContent[] = [
    {
      title: 'Sequential Distalization',
      description: 'Treating the Class II Teen Patient',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/noble-banner-1.png',
      url: '',
      logo: 'assets/images/sponsor-images/NBL-logo-white.png',
      sponsoredBy: 'Sponsored content from Noble Biocare, N.A.',
      filterby: 'NBL'
    },
    {
      title: 'The Importance of Primary Stability',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/noble-banner-2.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/NBL-logo-white.png',
      sponsoredBy: 'Sponsored content from Noble Biocare, N.A.',
      filterby: 'NBL'
    },
    {
      title: 'Socket Augmentation 5 Clinical Pearls',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/noble-banner-3.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/NBL-logo-white.png',
      sponsoredBy: 'Sponsored content from Noble Biocare, N.A.',
      filterby: 'NBL'
    },
    {
      title: 'Assessment of the Implant Patient for DSO Dentists',
      description: '',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/noble-banner-4.jpg',
      url: '',
      logo: 'assets/images/sponsor-images/NBL-logo-white.png',
      sponsoredBy: 'Sponsored content from Noble Biocare, N.A.',
      filterby: 'NBL'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.pipe().subscribe(param => {
      this.sponsorName = param.name;
    });
  }
  ngOnInit() {}
}
