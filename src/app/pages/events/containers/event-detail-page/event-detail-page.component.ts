import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateNativeAdapter
} from '@ng-bootstrap/ng-bootstrap';
import Glide, {
  Controls,
  Autoplay,
  Anchors
} from '@glidejs/glide/dist/glide.modular.esm';
import { DSODSliderContent } from '../../../../shared/models';
import { DSODContentType } from 'src/app/core/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DSODCreateEventComponent } from '../../components/create-event/create-event.component';
import { DSODEventCardComponent } from '../../components';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { authState } from '../../../auth/states';
import { Router } from '@angular/router';

@Component({
  selector: 'dsod-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DSODEventDetailPageComponent implements AfterViewInit {
  eventDate: any;
  isEditingEnable = false;
  isdeletionEnable = false;
  isLoggedIn$ = this.authService.isLoggedIn$;
  @ViewChild('slider')
  slider: ElementRef;
  @ViewChildren(DSODEventCardComponent) childrenCardComponents: QueryList<
    DSODEventCardComponent
  >;
  events = [
    {
      id: 1,
      image: 'assets/images/event-4-lg.png',
      title: 'The Importance of Oral Hygiene for the Pediatric Patient',
      author: 'Dr. Greg Psaltis',
      content:
        `This webinar will discuss how primary dental care plays a vital role in children's dental health as they grow and will`,
      date: 'Feb 10 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '9pm EST',
      eventType: 'In-Person Event',
      level: 'Advanced',
      price: 'Free'
    },
    {
      id: 2,
      image: 'assets/images/event-5-lg.png',
      title: 'Simple Steps for Managing Student Loan Debt',
      author: 'Dr. Ashley Keen',
      content:
        'Dr Keen will discuss debt and compounding interest management, the pros and cons of loan consolidation, and the',
      date: 'Mar 22 2018 12:00:00 GMT-0500',
      duration: '1hr 30m',
      place: 'Online',
      time: '1pm EST',
      eventType: 'Virtual Event',
      level: 'Beginner',
      price: 'Free'
    },
    {
      id: 3,
      image: 'assets/images/event-6-lg.png',
      title:
        'Managing the Relationship Between the Teeth and the Oral Environment',
      author: 'Dr. Kenneth Markowitz ',
      content:
        `This webinar will explain the relationship between a patient's saliva`,
      date: 'Apr 11 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '10am EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free'
    },
    {
      id: 4,
      image: 'assets/images/event-7-lg.png',
      title: 'Self-service Analytics for Dental Support Organizations',
      author: 'Dr Mark Hodge',
      content:
        'In this webinar, you’ll hear how one major DSO made the shift to cloud data visualization with Tableau',
      date: 'May 10 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '1pm EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free'
    },
    {
      id: 5,
      image: 'assets/images/event-8-lg.png',
      title: 'Excellence in Digital Photography & Case Acceptance',
      author: 'Jack D. Griffin Jr., DMD',
      content:
        'This presentation will highlight the benefits of digital scanning and shows how it is a better option for your new or future',
      date: 'Jun 22 2018 12:00:00 GMT-0500',
      duration: '1hr 30m',
      place: 'Online',
      time: '3pm EST',
      eventType: 'In-Person Event',
      level: 'Advanced',
      price: 'Free'
    },
    {
      id: 6,
      image: 'assets/images/event-9-lg.png',
      title:
        'Not Just a Stepping Stone: Ownership in the DSO Supported Practice ',
      author: 'John Fazio, DMD ',
      content:
        'The objective of this webinar is to help attendees gain an accurate',
      date: 'Jul 11 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '11am EST',
      eventType: 'In-Person Event',
      level: 'Beginner',
      price: 'Free'
    },
    {
      id: 7,
      image: 'assets/images/event-5-lg.png',
      title: 'Simple Steps for Managing Student Loan Debt',
      author: 'Dr. Ashley Keen',
      content:
        'Dr Keen will discuss debt and compounding interest management, the pros and cons of loan consolidation, and the',
      date: 'Mar 22 2018 12:00:00 GMT-0500',
      duration: '1hr 30m',
      place: 'Online',
      time: '1pm EST',
      eventType: 'Virtual Event',
      level: 'Beginner',
      price: 'Free'
    },
    {
      id: 8,
      image: 'assets/images/event-9-lg.png',
      title:
        'Not Just a Stepping Stone: Ownership in the DSO Supported Practice ',
      author: 'John Fazio, DMD ',
      content:
        'The objective of this webinar is to help attendees gain an accurate',
      date: 'Jul 11 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '11am EST',
      eventType: 'In-Person Event',
      level: 'Beginner',
      price: 'Free'
    },
    {
      id: 9,
      image: 'assets/images/event-slide-lg.png',
      title: 'Self-service Analytics for Dental Support Organizations',
      author: 'Dr Mark Hodge',
      content:
        'In this webinar, you’ll hear how one major DSO made the shift to cloud data visualization with Tableau',
      date: 'May 10 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '1pm EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free'
    }
  ];

  content: DSODSliderContent[] = [
    {
      title: '4 Important "Must Do" Steps for New Dentists',
      description: 'November 15, 2018 | 9 pm EST',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/event-slide-1.jpg',
      url: ''
    }
  ];
  constructor(private modalService: NgbModal, private authService: AuthService, private router: Router) { }
  ngAfterViewInit() {
    const elems = this.slider.nativeElement as HTMLUListElement;
    if (elems.children.length > 0) {
      new Glide('.events-banner', {
        type: 'carousel',
        autoheight: false,
        autoplay: 8000,
        animationTimingFunc: 'ease',
        animationDuration: 1000,
        padding: 0,
        gap: 0,
        dragDistance: 100
      }).mount({ Autoplay, Controls, Anchors });
    }
  }

  onSelectDate(e) {
    const modalRef = this.modalService.open(DSODCreateEventComponent, {
      windowClass: 'create-event'
    });
    modalRef.componentInstance.selectedDate = this.eventDate;
  }

  onEditEvent(e) {
    this.isEditingEnable = true;
  }

  onSaveEvents() {
    this.isEditingEnable = false;
    this.childrenCardComponents.forEach(component => {
      component.enableEditing = false;
    });
  }

  onDeleteEvent() {
    this.isdeletionEnable = true;
  }

  deleteEvent(e) {
    this.events.filter(event => e.id);
  }

  navigateTo(e) {
    if (e.id == 1) {
      this.router.navigate(['events', e.id])
    }
    else return
  }
}
