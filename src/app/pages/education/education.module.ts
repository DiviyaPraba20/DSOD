import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { EducationRoutingModule } from './education-routing.module';
import { EducationContainerComponent } from './container/education-container.component';
import { EducationCatalogueComponent } from './components/education-catalogue/education-catalogue.component';
import { EducationSubCategoryComponent } from './components/education-sub-category/education-sub-category.component';
import { EducationItemCardComponent } from './components/education-item-card/education-item-card.component';

@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule,
    TabsModule.forRoot()
  ],
  declarations: [
    EducationContainerComponent,
    EducationCatalogueComponent,
    EducationSubCategoryComponent,
    EducationItemCardComponent
  ]
})
export class EducationModule { }
