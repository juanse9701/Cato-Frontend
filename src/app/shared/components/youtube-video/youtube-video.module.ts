import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@NgModule({
  declarations: [YoutubeVideoComponent, SafePipe],
  imports: [CommonModule],
  exports: [YoutubeVideoComponent]
})
export class YoutubeVideoModule {}
