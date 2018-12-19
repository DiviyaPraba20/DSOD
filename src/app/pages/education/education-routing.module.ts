import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationContainerComponent } from './container/education-container.component';
import { EducationCatalogueComponent } from './components/education-catalogue/education-catalogue.component';
import { EducationSubCategoryComponent } from './components/education-sub-category/education-sub-category.component';

const routes: Routes = [
  {
    path: '',
    component: EducationContainerComponent,
    children: [
      {
        path: '',
        component: EducationCatalogueComponent
      },
      {
        path: 'category/:categoryName',
        component: EducationSubCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
