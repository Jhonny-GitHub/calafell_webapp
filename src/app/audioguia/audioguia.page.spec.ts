import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioguiaPage } from './audioguia.page';
import { Howl } from 'howler';

describe('AudioguiaPage', () => {
  let component: AudioguiaPage;
  let fixture: ComponentFixture<AudioguiaPage>;
  const {Howl, Howler} = require('howler');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioguiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioguiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
