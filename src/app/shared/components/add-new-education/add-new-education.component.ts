import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'dsod-add-new-education',
  templateUrl: './add-new-education.component.html',
  styleUrls: ['./add-new-education.component.scss']
})
export class DSODAddNewEducationComponent implements OnInit {
  @Input() show = false;

  detenSchoolList: any[] = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllDentalSchools().pipe().subscribe(res => {
      this.detenSchoolList = res.resultMap.data;
    });
  }

}
