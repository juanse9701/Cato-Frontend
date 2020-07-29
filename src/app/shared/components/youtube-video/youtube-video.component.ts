import { Component, OnInit, Input } from '@angular/core';
/**
 * Componente encargado de renderizar un video de youtube.
 */
@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() video: string;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
