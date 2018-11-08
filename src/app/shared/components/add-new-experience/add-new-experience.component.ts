import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Experience } from '../../../layout/profile/models/userProfile';

@Component({
  selector: 'dsod-add-new-experience',
  templateUrl: './add-new-experience.component.html',
  styleUrls: ['./add-new-experience.component.scss']
})
export class DSODAddNewExperienceComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() experience: Experience = null;

  practiceTypes: any[] = [];
  practiceRoles: any[] = [];
  practiceDSOs: any[] = [];
  isCurrenWorking = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllPracticeTypes().pipe().subscribe(res => {
      this.practiceTypes = res.resultMap.data;
    });

    this.authService.getAllPracticeRoles().pipe().subscribe(res => {
      this.practiceRoles = res.resultMap.data;
    });

    this.authService.getAllPracticeDSO().pipe().subscribe(res => {
      this.practiceDSOs = res.resultMap.data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.show.currentValue) {
      console.log(this.experience);
    }
  }
}
