import { Component, OnInit } from '@angular/core';
import { DSOEducationCategory } from '../../models/category.model';
import { Router, ActivatedRoute } from '@angular/router';

export const DSODEducationCategoryData: DSOEducationCategory[] = [{
  title: 'Endodontics',
  name: 'endotontics',
  image: './assets/images/education/endodontics.png',
  count: 123
}, {
  title: 'General Dentistry',
  name: 'dentistry',
  image: './assets/images/education/dentistry.png',
  count: 123
}, {
  title: 'Oral and Maxillofacial Surgery',
  name: 'surgery',
  image: './assets/images/education/surgery.png',
  count: 123
}, {
  title: 'Orthodontics',
  name: 'orthodontics',
  image: './assets/images/education/orthodontics.png',
  count: 123
}, {
  title: 'Pediatrics',
  name: 'pediatrics',
  image: './assets/images/education/pediatrics.png',
  count: 123
}, {
  title: 'Periodontics',
  name: 'periodontics',
  image: './assets/images/education/periodontics.png',
  count: 123
}, {
  title: 'Prosthodontics',
  name: 'prosthodontics',
  image: './assets/images/education/prosthodontics.png',
  count: 123
}];

@Component({
  selector: 'dsod-education-catalogue',
  templateUrl: './education-catalogue.component.html',
  styleUrls: ['./education-catalogue.component.scss']
})
export class EducationCatalogueComponent implements OnInit {

  categoryList: DSOEducationCategory[] = DSODEducationCategoryData;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onClickCategory(categoryName) {
    this.router.navigate([`category/${categoryName}`], { relativeTo: this.route });
  }
}
