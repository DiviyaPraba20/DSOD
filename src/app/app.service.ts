import { Injectable, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApplicationStateService {
    private isMobileResolution: boolean;

    constructor(@Inject(DOCUMENT) private document: Document) {
        if (environment.production) {
            if (window.innerWidth < 768) {
                this.isMobileResolution = true;
                this.document.location.href = 'https://mobile.dsodentist.com';
            } else {
                this.isMobileResolution = false;
            }
        }
    }

    public getIsMobileResolution(): boolean {
        return this.isMobileResolution;
    }
}
