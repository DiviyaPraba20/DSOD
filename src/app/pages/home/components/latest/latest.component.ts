import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class DSODLatestComponent implements OnInit {
  latestItems = [
    {
      title: 'Ergonomics',
      summary: 'Overuse Syndromes in Dentistry',
      by: ' DSODentist',
      image: 'assets/images/back-pain.png',
      icon: 'assets/images/file-icon.png',
      description:
        'Did you know that most dentists who retire early do so because of a musculoskeletal disorder? ' +
        'Our strides towards reducing musculoskeletal/overuse syndromes have not been particularly successful,' +
        ' because the back and neck issues of today are about the same as the complaints one would hear 75 years ago.…'
    },
    {
      title: 'Operative Dentistry',
      summary: 'Repairing Failing Disto-Occlusal Fillings',
      by: ' DSODentist',
      image: 'assets/images/latest1.png',
      icon: 'assets/images/file-icon.png',
      description:
        'In order to deliver a bioesthetic restoration, one must address the inherent elements of the natural dentition,' +
        ' and then devise a method to replace or repair these properties. Consideration must be given to topography, stratification, optical properties, and strength…'
    },
    {
      title: 'General Dentistry',
      summary: 'Overuse Syndromes in Dentistry',
      by: ' DSODentist',
      image: 'assets/images/latest2.png',
      icon: 'assets/images/file-icon.png',
      description:
        'Most likely, your DSO already has a Controlled Substance Agreement that has passed through its legal department. ' +
        'Certainly, other fields of healthcare rely more heavily on opiates than does dentistry, but the risk is still there. Many patients are predisposed to substance abuse...'
    },
    {
      title: 'Practice Management',
      summary: 'Digital Impressions for Anterior Restorations',
      by: ' Steven Glassman, DDS',
      image: 'assets/images/latest3.png',
      icon: 'assets/images/file-icon.png',
      description:
        'Impressions for fixed prostheses contain many variables that can be eliminated through one’s adoption of digital intraoral scanning. ' +
        'Digital impressions are the gateway to clear aligner therapy as well as predictable crown and bridge dentistry...'
    },
    {
      title: 'Prosthodontics',
      summary: 'Professional Liability and the DSO Dentist',
      by: ' DSODentist',
      image: 'assets/images/latest4.png',
      icon: 'assets/images/file-icon.png',
      description:
        'Sometimes the dentist hires on to a DSO from the outset, while other times the DSO purchases an existing practice and shapes it in their image. ' +
        'For dentists as well as patients, risk management and patient safety are priorities. …'
    }
  ];
  trendingVideos = [
    {
      title: 'Oral Health',
      url: 'assets/images/dental-erosion.png',
      caption: 'Acid erosion'
    },
    {
      title: 'Implant Dentistty',
      url: 'assets/images/teeth-xray.png',
      caption: 'Anterior Implant'
    },
    {
      title: 'Periodontics',
      url: 'assets/images/reduce-plaque.png',
      caption: 'Reduce plaque'
    },
    {
      title: 'Practice Management',
      url: 'assets/images/social-media.png',
      caption: 'Social media'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
