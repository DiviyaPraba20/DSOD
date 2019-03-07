import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DSODFooterComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

  onClickSocial(socialType) {
    let url = '';
    switch (socialType) {
      case 'facebook':
        url = 'https://www.facebook.com/DSODentist';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/dso_dentist/';
        break;
      case 'twitter':
        url = 'https://twitter.com/dsodentist';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/company/dsodentist-com/about/';
        break;
    }
    window.open(url, '_blank');
  }
}
