import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'dsod-add-new-experience',
  templateUrl: './add-new-experience.component.html',
  styleUrls: ['./add-new-experience.component.scss']
})
export class DSODAddNewExperienceComponent implements OnInit {
  @Input() show = false;

  practiceTypes: any[] = [];
  practiceRoles: any[] = [];
  practiceDSOs: any[] = [];

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
}
