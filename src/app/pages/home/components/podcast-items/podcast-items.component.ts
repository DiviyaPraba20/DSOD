import { Component, Input, OnChanges } from '@angular/core';
import { CMSPageContent } from 'src/app/cms/models';

@Component({
  selector: 'dsod-podcast-items',
  templateUrl: './podcast-items.component.html',
  styleUrls: ['./podcast-items.component.scss']
})
export class DSODPodcastItemsComponent {
  @Input() podcasts: CMSPageContent[];
  @Input() imageIndex;
  @Input() indexEnd;
  @Input() indexStart;
  timerMap: Map<string, string>;

  constructor() {
    // Temporary mapping for timer
    this.timerMap = new Map();
    this.timerMap.set("The Role of Research in Dentistry", "2:18");
    this.timerMap.set("Implant Demographics", "2:49");
    this.timerMap.set("An Introduction to Xerostomia", "2:53");
    this.timerMap.set("The Importance of Practice Design", "1:56");
    this.timerMap.set("Treatment of Type III Sockets", "2:42");
    this.timerMap.set("The Dental Hygienist Profession", "1:37");
    this.timerMap.set("The All-on-4 Treatment Approach", "4:10");
    this.timerMap.set("8 Tips to Running a Successful Practice", "4:38");
    this.timerMap.set("The Two-Implant Overdenture for the Edentulous Patient", "2:59");
    this.timerMap.set("The Importance of Team in Your Practice", "4:10");
    this.timerMap.set("Treatment Options for Implants", "2:42");
    this.timerMap.set("The Transition to Dental Professional", "2:34");
    this.timerMap.set("Tips for Relocating as a New Dentist", "2:22");
    this.timerMap.set("How Common is Oral HPV?", "5:10");
    this.timerMap.set("The Two-Implant Overdenture for the Edentulous Patient", "2:34");
    this.timerMap.set("Anatomy of the Dentition", "4:14");
    this.timerMap.set("Anatomy of the Gingival Unit", "2:06");
    this.timerMap.set("Prevention and Treatment of Dental Erosion", "3:29");
    this.timerMap.set("Treatment for Xerostomia", "4:22");
    this.timerMap.set("Role of Oral Biofilm", "4:22");
    this.timerMap.set("Forestalling the Onset of Gingivitis", "2:49");
    this.timerMap.set("Seeking Mentorship & Developing Leadership Skills", "6:03");
    this.timerMap.set("A Lesson in Credit Health Monitoring & Protection", "6:49");
    this.timerMap.set("How To Prevent Dental Erosion", "3:29");
    this.timerMap.set("The Pros and Cons of Endodontic Therapy", "3:35");
    this.timerMap.set("The Two-Implant Overdenture", "2:59");
  }

  getTimer(podcastId: string) {
    return this.timerMap.get(podcastId);
  }
}
