import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DSODEducationCategoryData } from '../education-catalogue/education-catalogue.component';
import { DSOEducationCategory } from '../../models/category.model';

@Component({
  selector: 'dsod-education-sub-category',
  templateUrl: './education-sub-category.component.html',
  styleUrls: ['./education-sub-category.component.scss']
})
export class EducationSubCategoryComponent implements OnInit {
  categoryType = '';
  categoryInfo: DSOEducationCategory;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryType = params.categoryName;
      this.getCategoryName();
    });
  }

  getCategoryName() {
    this.categoryInfo = DSODEducationCategoryData.filter(data => data.name === this.categoryType)[0];
  }
}
