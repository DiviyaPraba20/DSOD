import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { LocalStorageModule } from 'angular-2-local-storage';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { states } from './states';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false }),
    NgxsModule.forRoot(states),
    LocalStorageModule.withConfig({prefix: environment.localStorage.prefix, storageType: 'localStorage'}),
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    AuthModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
