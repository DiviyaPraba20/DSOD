import { Component } from "@angular/core";

@Component({selector: 'dsod-rating',
    template: ` 
    <div class="topic-rating">
        <span class="filled"><i class="fa fa-star" aria-hidden="true"></i></span>
        <span class="filled"><i class="fa fa-star" aria-hidden="true"></i></span>
        <span class="filled"><i class="fa fa-star" aria-hidden="true"></i></span>
        <span class="filled"><i class="fa fa-star" aria-hidden="true"></i></span>
        <span class="un-filled"><i class="fa fa-star" aria-hidden="true"></i></span>
    </div>`,
    styleUrls: ['./rating.component.scss']
})

export class DSODRatingComponent {}