import { Component, OnInit, OnDestroy } from '@angular/core';
import { DSODSliderContent } from 'src/app/shared/models';
import { DSODContentType } from 'src/app/core/models/content';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dsod-sponsor-page',
  templateUrl: './sponsor-container.component.html',
  styleUrls: ['./sponsor-container.component.scss']
})
export class DSODSponsorContainerComponent implements OnInit{
  sponsorName:any
  NBLcontents: DSODSliderContent[] = [
    {
      title: 'Sequential Distalization',
      description: 'Treating the Class II Teen Patient',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/align-banner-1.png',
      url: '',
      logo: 'assets/images/sponsor-images/NBL-logo-white.png',
      sponsoredBy: 'Sponsored content from Noble Biocare, N.A.',
      filterby:'NBL'
    },
  ]; 
  GSKcontents: DSODSliderContent[] = [
    {
      title: 'Dentin Hypersensitivity:',
      description: 'Your refrence to the hydrodynamic theory',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/gsk-banner-1 .png',
      url: '',
      logo:'assets/images/gsk-icon-sm.png',
      sponsoredBy:'Sponsored content from GlaxoSmithKline',
      filterby: 'GSK'
    },
  ];
  ALNcontents: DSODSliderContent[] = [
    {
      title: 'Assessment of the Implant Patient:',
      description: 'Review criteria for DSO dentists',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/sponsor-images/noble-banner-1.png',
      url: '',
      logo: 'assets/images/sponsor-images/ALN-logo-white.png',
      sponsoredBy:'Sponsored content from Align',
      filterby: 'ALN'
    },
  ];

  carousalImage:any
  constructor(private route :ActivatedRoute) {
    this.route.params.pipe().subscribe(param=>{
      this.sponsorName=param.name;
    })
  }
  ngOnInit() {}
}
