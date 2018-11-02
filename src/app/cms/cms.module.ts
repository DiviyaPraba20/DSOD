import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMSService } from './services/cms.service';
import { CMSContentFilter } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [CMSContentFilter],
  exports: [CMSContentFilter]
})
export class CMSModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CMSModule,
      providers: [CMSService]
    };
  }
}
