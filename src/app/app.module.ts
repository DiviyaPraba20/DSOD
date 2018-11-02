import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { LocalStorageModule } from 'angular-2-local-storage';
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
    // NgxsRouterPluginModule.forRoot(),
    // NgxsStoragePluginModule.forRoot({}),
    LocalStorageModule.withConfig({prefix: environment.localStorage.prefix, storageType: 'localStorage'}),
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
    CoreModule.forRoot(),
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
