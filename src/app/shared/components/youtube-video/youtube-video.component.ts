import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  video: any = { src: 'https://www.youtube.com/embed/ZRCdORJiUgU' };
  constructor() {}

  ngOnInit() {}
}
