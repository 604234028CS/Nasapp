import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsonPage } from './json';

@NgModule({
  declarations: [
    JsonPage,
  ],
  imports: [
    IonicPageModule.forChild(JsonPage),
  ],
})
export class JsonPageModule {}
