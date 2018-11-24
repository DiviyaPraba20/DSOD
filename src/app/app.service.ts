import { Injectable, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({ providedIn: 'root' })
export class ApplicationStateService {
  private isMobileResolution: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, private deviceService: DeviceDetectorService) {
    if (environment.production) {
      if (this.deviceService.isMobile() || this.deviceService.isTablet()) {
        this.document.location.href = 'https://mobile.dsodentist.com';
      }
    }
  }

  public getIsMobileResolution(): boolean {
    return this.deviceService.isMobile();
  }
}