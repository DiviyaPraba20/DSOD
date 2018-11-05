import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { states } from './states';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CMSModule } from './cms/cms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot(states),
    ToastrModule.forRoot({}),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production || false
    }),

    NgxsStoragePluginModule.forRoot({ key: ['auth'] }),
    NgxsRouterPluginModule.forRoot(),
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    CoreModule.forRoot(),
    CMSModule.forRoot(),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
