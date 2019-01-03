import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dsod-podcast-preview',
  templateUrl: './podcast-preview.component.html',
  styleUrls: [
    '../../podcast/components/podcast-content/podcast-content.component.scss',
    '../../podcast/components/podcast-header/podcast-header.component.scss',
    '../../../shared/components/author/author.component.scss'
  ]
})
export class DSODPodcastPreviewComponent implements OnInit {
  @Input() content;

  ngOnInit() { }
}
