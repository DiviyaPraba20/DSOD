import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Glide, { Controls, Autoplay, Anchors } from '@glidejs/glide/dist/glide.modular.esm';

import { DSODSliderContent } from '../../../../shared/models';
import { DSODContentType } from 'src/app/core/models';
import { DSODCreateEventComponent } from '../../components/create-event/create-event.component';
import { DSODEventCardComponent } from '../../components';
import { AuthService } from 'src/app/core/services/auth.service';

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

  private sub: any;
  selectedEvent: any;

  @ViewChild('slider') slider: ElementRef;
  @ViewChildren(DSODEventCardComponent) childrenCardComponents: QueryList<DSODEventCardComponent>;

  events = [
    {
      id: 1,
      image: 'assets/images/event-4-lg.png',
      sliderImages: [
        { path: 'event-slide-1.jpg' },
        { path: 'event-slide-2.jpg' },
        { path: 'event-slide-3.jpg' },
        { path: 'event-slide-4.jpg' },
        { path: 'event-slide-5.jpg' }
      ],
      title: 'The Importance of Oral Hygiene for the Pediatric Patient',
      author: 'Dr. Greg Psaltis',
      content: `This webinar will discuss how primary dental care plays a vital role in children’s dental health as they grow
                        and
                        will cover ways to instill good oral hygiene habits in these children. Developing good oral hygiene habits at a
                        young
                        age is the first step in securing a safe future from many common dental issues such as plaque, gum disease, and
                        cavities. If these habits are not enforced at a young age, the same poor hygiene habits could negatively impact
                        their
                        oral health as an adult and impact their daily lives as well. `,
      date: 'Apr 10 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '9pm EST',
      eventType: 'In-Person Event',
      level: 'Advanced',
      price: 'Free',
      attendees: '50'
    },
    {
      id: 2,
      image: 'assets/images/event-5-lg.png',
      sliderImages: [
        { path: 'student-loan-slide-1.jpg' },
        { path: 'student-loan-slide-2.jpg' }
      ],
      title: 'Tips for Keeping Student Loan Debt in Check',
      author: 'Dr. Ashley Keen',
      content: 'Dr Keen will discuss debt and compounding interest management, the pros and cons of loan consolidation, and the',
      date: 'Aug 23 2019 12:00:00 GMT-0500',
      duration: '1hr 30m',
      place: 'Online',
      time: '1pm EST',
      eventType: 'Virtual Event',
      level: 'Beginner',
      price: 'Free',
      attendees: '150'
    },
    {
      id: 3,
      image: 'assets/images/event-6-lg.png',
      sliderImages: [
        { path: 'managing-slide-1.jpg' },
        { path: 'managing-slide-2.jpg' }
      ],
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
      image: 'assets/images/event-7-lg.png',
      sliderImages: [
        { path: 'self-service-slide-1.jpg' },
        { path: 'self-service-slide-2.jpg' },
        { path: 'self-service-slide-3.jpg' }
      ],
      title: 'Self-service Analytics for Dental Support Organizations',
      author: 'Dr Mark Hodge',
      content: 'In this webinar, you’ll hear how one major DSO made the shift to cloud data visualization with Tableau',
      date: 'May 10 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '1pm EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free',
      attendees: '50'
    },
    {
      id: 5,
      image: 'assets/images/photography-slide-1.jpg',
      sliderImages: [
        { path: 'photography-slide-1.jpg' },
        { path: 'photography-slide-2.jpg' },
        { path: 'photography-slide-3.jpg' }
      ],
      title: 'Excellence in Digital Photography & Case Acceptance',
      author: 'Jack D. Griffin Jr., DMD',
      content: 'This presentation will highlight the benefits of digital scanning and shows how it is a better option for your new or future',
      date: 'Jun 22 2018 12:00:00 GMT-0500',
      duration: '1hr 30m',
      place: 'Online',
      time: '3pm EST',
      eventType: 'In-Person Event',
      level: 'Advanced',
      price: 'Free',
      attendees: '200'
    },
    {
      id: 6,
      image: 'assets/images/stepping-stone-slide-1.jpg',
      sliderImages: [
        { path: 'stepping-stone-slide-1.jpg' },
        { path: 'stepping-stone-slide-2.jpg' },
        { path: 'stepping-stone-slide-3.jpg' }
      ],
      title: 'Not Just a Stepping Stone: Ownership in the DSO Supported Practice ',
      author: 'John Fazio, DMD ',
      content: 'The objective of this webinar is to help attendees gain an accurate',
      date: 'Jul 11 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '11am EST',
      eventType: 'In-Person Event',
      level: 'Beginner',
      price: 'Free',
      attendees: '200'
    },
    {
      id:10,
      image: 'assets/images/event-1.png',
      sliderImages: [
        { path: 'stepping-stone-slide-1.jpg' },
        { path: 'stepping-stone-slide-2.jpg' },
        { path: 'stepping-stone-slide-3.jpg' }
      ],
      title:'Vital First Steps for a New Dentist',
      author: 'Dr. Shach Bahadur',
      content: 'Vital First Steps for a New Dentist...',
      date: 'June 15 2019 12:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '1pm EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free',
      attendees: '50'
    },
    {
      id:11,
      image: 'assets/images/event-2.png',
      sliderImages: [
        { path: 'event-slide-1.jpg' },
        { path: 'event-slide-2.jpg' },
        { path: 'event-slide-3.jpg' },
        { path: 'event-slide-4.jpg' },
        { path: 'event-slide-5.jpg' }
      ],
      title:'Improving Oral Hygiene and Health by Reducing Dental Plaque Biofilm',
      author: 'Christine Hovliaras, RDH',
      content: 'Vital First Steps for a New Dentist...',
      date: 'July 06 2019 10:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '10am EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free',
      attendees: '100'
    },
    {
      id:12,
      image: 'assets/images/event-3.png',
      sliderImages: [
        { path: 'event-slide-1.jpg' },
        { path: 'event-slide-2.jpg' },
        { path: 'event-slide-3.jpg' },
        { path: 'event-slide-4.jpg' },
        { path: 'event-slide-5.jpg' }
      ],
      title:'Key Questions to Ask When Considering an Associateship',
      author: 'Dr. Niv Rajagopalan',
      content: 'Key Questions to Ask When Considering an Associateship...',
      date: 'July 26 2019 9:00:00 GMT-0500',
      duration: '1hr',
      place: 'New York, NY',
      time: '9am EST',
      eventType: 'In-Person Event',
      level: 'Expert',
      price: 'Free',
      attendees: '100'
    }

  ];

  content: DSODSliderContent[] = [
    {
      title: '4 Important "Must Do" Steps for New Dentists',
      description: 'June 15, 2019 | 1 pm EST',
      actionName: 'Learn More',
      actionLink: '/',
      contentType: DSODContentType.Image,
      src: 'assets/images/event-slide-1.jpg',
      url: ''
    }
  ];

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        let pathEventId = +params['id'];
        if(pathEventId) {
           let filteredEvents = this.events.filter(event => event.id == pathEventId);
           this.selectedEvent = filteredEvents[0];
        }
     });
  }

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
  stringify(obj){
     return JSON.stringify(obj);
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
    if (e.id === 1) {
      this.router.navigate(['events', e.id]);
    } else {
      return;
    }
  }

}
