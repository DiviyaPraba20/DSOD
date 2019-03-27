import { Component, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Glide, { Controls, Autoplay, Anchors } from '@glidejs/glide/dist/glide.modular.esm';

import { DSODSliderContent } from '../../../shared/models';
import { DSODContentType } from 'src/app/core/models';
import { DSODCreateEventComponent } from '../components/create-event/create-event.component';
import { DSODEventCardComponent } from '../components';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'dsod-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class DSODEventsPageComponent{
  eventDate: any;
  isEditingEnable = false;
  isdeletionEnable = false;
  isLoggedIn$ = this.authService.isLoggedIn$;
  @ViewChildren(DSODEventCardComponent) childrenCardComponents: QueryList<DSODEventCardComponent>;

  events = [
    {
      id: 1,
      image: 'assets/images/event-4-lg.png',
      title: 'The Importance of Oral Hygiene for the Pediatric Patient',
      author: 'Dr. Greg Psaltis',
      content: `This webinar will discuss how primary dental care plays a vital role in children's dental health as they grow and will`,
      date: 'Feb 23 2019 12:00:00 GMT-0500',
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
      title: 'Tips for Keeping Student Loan Debt in Check',
      author: 'Dr. Ashley Keen',
      content: 'Dr Keen will discuss debt and compounding interest management, the pros and cons of loan consolidation, and the',
      date: 'Aug 23 2019 12:00:00 GMT-0500',
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
      title: 'The Oral Environment and its Effect on Teeth',
      author: 'Dr. Kenneth Markowitz ',
      content: `This webinar will explain the relationship between a patient's saliva`,
      date: 'Apr 11 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '10am EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free',
      attendees: '70'
    },
    {
      id: 4,
      image: 'assets/images/event-7-lg.jpg',
      title: 'Self-service Analytics for Dental Support Organizations',
      author: 'Dr Mark Hodge',
      content: 'In this webinar, you’ll hear how one major DSO made the shift to cloud data visualization with Tableau',
      date: 'May 10 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '1pm EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free'
    },
    {
      id: 5,
      image: 'assets/images/event-8-lg.jpg',
      title: 'Excellence in Digital Photography & Case Acceptance',
      author: 'Jack D. Griffin Jr., DMD',
      content: 'This presentation will highlight the benefits of digital scanning and shows how it is a better option for your new or future',
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
      image: 'assets/images/event-9-lg.jpg',
      title: 'Not Just a Stepping Stone: Ownership in the DSO Supported Practice ',
      author: 'John Fazio, DMD ',
      content: 'The objective of this webinar is to help attendees gain an accurate',
      date: 'Jul 11 2018 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '11am EST',
      eventType: 'In-Person Event',
      level: 'Beginner',
      price: 'Free'
    },
    // {
    //   id: 7,
    //   image: 'assets/images/event-5-lg.png',
    //   title: 'Simple Steps for Managing Student Loan Debt',
    //   author: 'Dr. Ashley Keen',
    //   content: 'Dr Keen will discuss debt and compounding interest management, the pros and cons of loan consolidation, and the',
    //   date: 'Mar 22 2018 12:00:00 GMT-0500',
    //   duration: '1hr 30m',
    //   place: 'Online',
    //   time: '1pm EST',
    //   eventType: 'Virtual Event',
    //   level: 'Beginner',
    //   price: 'Free'
    // },
    // {
    //   id: 8,
    //   image: 'assets/images/stepping-stone-slide-1.jpg',
    //   title: 'Not Just a Stepping Stone: Ownership in the DSO Supported Practice ',
    //   author: 'John Fazio, DMD ',
    //   content: 'The objective of this webinar is to help attendees gain an accurate',
    //   date: 'Jul 11 2019 12:00:00 GMT-0500',
    //   duration: '1hr',
    //   place: 'New York, NY',
    //   time: '11am EST',
    //   eventType: 'In-Person Event',
    //   level: 'Beginner',
    //   price: 'Free'
    // },
    // {
    //   id: 9,
    //   image: 'assets/images/event-7-lg.png',
    //   title: 'Self-service Analytics for Dental Support Organizations',
    //   author: 'Dr Mark Hodge',
    //   content: 'In this webinar, you’ll hear how one major DSO made the shift to cloud data visualization with Tableau',
    //   date: 'May 10 2018 12:00:00 GMT-0500',
    //   duration: '1hr',
    //   place: 'New York, NY',
    //   time: '1pm EST',
    //   eventType: 'In-Person Event',
    //   level: 'Expert',
    //   price: 'Free'
    // }
  ];

  contents: DSODSliderContent[] = [
    {
      title: '4 Important "Must Do" Steps for New Dentists',
      description: 'June 15, 2019 | 1 pm EST',
      actionName: 'Learn More',
      actionLink: '/events/10',
      contentType: DSODContentType.Image,
      src: 'assets/images/event-banner-slide1.png',
      url: ''
    },
    {
      title: 'The Importance of Oral Health for the Pediatric Patient',
      description: 'August 10, 2019 | 10 am EST',
      actionName: 'Learn More',
      actionLink: '/events/1',
      contentType: DSODContentType.Image,
      src: 'assets/images/event-slide-5a.jpg',
      url: '/events/1'
    }
  ];
  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
  ) { }

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
    //if (e.id === 1) {
    //  this.router.navigate(['events', e.id]);
    //} else {
    //  return;
    //}
    this.router.navigate(['events', e.id]);
  }
}
