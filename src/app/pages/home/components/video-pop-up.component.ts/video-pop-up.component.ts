import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-pop-up',
  templateUrl: './video-pop-up.component.html',
  styleUrls: ['./video-pop-up.component.scss']
})
export class VideoPopUpComponent implements OnInit {
  public jamesIrvineVideo = 'https://www.youtube.com/embed/6gy5G0JpTQ8';
  public show = true;
  player: YT.Player;
  private id: string = '6gy5G0JpTQ8';

  constructor(public sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

  exit(){
    this.show = false;
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
