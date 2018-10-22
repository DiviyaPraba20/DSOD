import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteHandler } from './route.handler';

const noop = () => () => {};

@NgModule({
  imports: [ CommonModule ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: noop,
        deps: [RouteHandler],
        multi: true
      }]
    };
  }
}
