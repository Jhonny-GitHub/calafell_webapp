import { Component, OnInit, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';

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
  progress = 0;
  @ViewChild('range', { static : false }) range: IonRange;

  constructor () {}

  start(track: Track){
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true; 
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: () => {
        console.log('onend');
        this.isPlaying = false;
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

  seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    },10)
  }

  ngOnInit() {
  }

}