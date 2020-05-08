import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
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
  activeIndex = 0;
  player: Howl = null;
  isPlaying = {};
  progress = {};
  timeout = null;
  @ViewChildren('range') ranges: QueryList<IonRange>;

  constructor () {
  }

  start(i: number, track: Track){
    clearTimeout(this.timeout);
    this.progress = {}
    this.isPlaying = {}
    console.log("start", i, track);
    if(this.player && this.activeIndex === i) return this.tooglePlayer(false, track);
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay');
        this.isPlaying[i] = true; 
        this.activeTrack = track;
        this.activeIndex = i;
        this.updateProgress(i);
      },
      onend: () => {
        console.log('onend');
        this.isPlaying[i] = false;
      }
    });
    this.player.play();
  }

  tooglePlayer(i, pause){
    console.log("toogle player pause", pause);
    this.isPlaying[i] = !pause;
    if (pause){
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  seek(i: number){
    console.log("seek", i);
    const range = this.ranges.toArray()[i];
    let newValue = +range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress(i){
    console.log("update i",i);
    let seek = this.player.seek();
    this.progress[i] = (seek / this.player.duration()) * 100 || 0;
    this.timeout = setTimeout(() => {
      this.updateProgress(i);
    },10)
  }

  ngOnInit() {
  }

}