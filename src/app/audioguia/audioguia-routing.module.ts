import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioguiaPage } from './audioguia.page';

const routes: Routes = [
  {
    path: '',
    component: AudioguiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioguiaPageRoutingModule {}
