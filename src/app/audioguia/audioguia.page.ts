import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

export interface Track{
  name: string;
  path: string;
}

@Component({
  selector: 'app-audioguia',
  templateUrl: './audioguia.page.html',
  styleUrls: ['./audioguia.page.scss'],
})
export class AudioguiaPage implements OnInit {

  playlist: Track[] = [
    {
      name: 'audio 1',
      path: './assets/mp3/calafell_locucion_Cat_1.mp3'
    },
    { 
      name: 'audio 2',
      path: './assets/mp3/calafell_locucion_Cat_2.mp3'
    },
    { 
      name: 'audio 3',
      path: './assets/mp3/calafell_locucion_Cat_3.mp3'
    },
    { 
      name: 'audio 4',
      path: './assets/mp3/calafell_locucion_Cat_4.mp3'
    },
    { 
      name: 'audio 5',
      path: './assets/mp3/calafell_locucion_Cat_5.mp3'
    },
    { 
      name: 'audio 6',
      path: './assets/mp3/calafell_locucion_Cat_6.mp3'
    },
  ];
  
  activeTrack: Track  = null;
  player: Howl = null;
  isPlaying = false;

  constructor () {}

  start(track: Track){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true; 
        this.activeTrack = track;
      },
      onend: () => {
        console.log('onend');
      }
    });
    this.player.play();
  }

  tooglePlayer(pause){
    this.isPlaying = !pause;
    if (pause){
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  ngOnInit() {
  }

}