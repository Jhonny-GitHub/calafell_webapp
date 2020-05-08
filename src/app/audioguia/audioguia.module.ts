import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioguiaPageRoutingModule } from './audioguia-routing.module';

import { AudioguiaPage } from './audioguia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioguiaPageRoutingModule
  ],
  declarations: [AudioguiaPage]
})
export class AudioguiaPageModule {}
