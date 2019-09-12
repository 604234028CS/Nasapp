import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieAppPage } from './movie-app';

@NgModule({
  declarations: [
    MovieAppPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieAppPage),
  ],
})
export class MovieAppPageModule {}
