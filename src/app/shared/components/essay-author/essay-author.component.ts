import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dsod-essay-author',
  templateUrl: './essay-author.component.html',
  styleUrls: ['./essay-author.component.scss']
})
export class DSODEssayAuthorComponent {
  @Input() essay: any;

  getUrl(id) {
    return `${environment.url}/file/downloadFileByObjectId?objectId=${id}`;
  }
}
