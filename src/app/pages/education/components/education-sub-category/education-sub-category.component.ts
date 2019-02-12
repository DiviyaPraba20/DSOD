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
  sampleVideos = [
    {
      url:
        'https://ak8.picdn.net/shutterstock/videos/22522198/preview/stock-footage-seven-stylish-diverse-people-lean-on-a-conference-table-while-energetically-discussing-daily.webm',
      title:
        'Seven Stylish Diverse People Lean on a Conference Table While Energetically Discussing Daily Business Plans'
    },
    {
      url:
        'https://ak0.picdn.net/shutterstock/videos/13949960/preview/stock-footage-creative-business-team-brainstorming-ideas-working-together-sharing-data-late-at-night-after-hours.webm',
      title:
        'stock-footage creative business team brainstorming ideas working together'
    },
    {
      url:
        'https://ak1.picdn.net/shutterstock/videos/5762801/preview/stock-footage-happy-and-enthusiastic-group-of-male-and-female-students-studying-together-in-their-shared.webm',
      title:
        'Happy and enthusiastic group of male and female students studying togethe'
    },
    {
      url:
        'https://ak0.picdn.net/shutterstock/videos/13949570/preview/stock-footage-creative-business-team-meeting-in-trendy-hipster-office-discussing-new-ideas-female-manager-or.webm',
      title:
        'Creative business team meeting in trendy hipster office discussing new ideas'
    },
    {
      url:
        'https://ak0.picdn.net/shutterstock/videos/13949960/preview/stock-footage-creative-business-team-brainstorming-ideas-working-together-sharing-data-late-at-night-after-hours.webm',
      title:
        'stock-footage creative business team brainstorming ideas working together'
    },
    {
      url:
        'https://ak0.picdn.net/shutterstock/videos/13949570/preview/stock-footage-creative-business-team-meeting-in-trendy-hipster-office-discussing-new-ideas-female-manager-or.webm',
      title:
        'Creative business team meeting in trendy hipster office discussing new ideas'
    },
    {
      url:
        'https://ak1.picdn.net/shutterstock/videos/4488941/preview/stock-footage-small-business-people-casual-young-downtown-workers-in-chic-loft-or-warehouse-offices.webm',
      title:
        'stock-footage creative business team brainstorming ideas working together'
    },
    {
      url:
        'https://ak1.picdn.net/shutterstock/videos/4488161/preview/stock-footage-small-business-team-in-creative-discussion-casual-young-downtown-workers-in-chic-loft-or-warehouse.webm',
      title:
        'stock-footage creative business team brainstorming ideas working together'
    },

  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryType = params.categoryName;
      this.getCategoryName();
    });
  }

  getCategoryName() {
    this.categoryInfo = DSODEducationCategoryData.filter(
      data => data.name === this.categoryType
    )[0];
  }
}
