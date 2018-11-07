import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'dsod-add-new-residency',
  templateUrl: './add-new-residency.component.html',
  styleUrls: ['./add-new-residency.component.scss']
})
export class DSODAddNewResidencyComponent implements OnInit {
  @Input() show = false;

  residencyList: any[] = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllResidencies().pipe().subscribe(res => {
      this.residencyList = res.resultMap.data;
    });
  }

}
