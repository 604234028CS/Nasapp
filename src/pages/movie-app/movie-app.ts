import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-app',
  templateUrl: 'movie-app.html',
})
export class MovieAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

  goToNow(){
    this.navCtrl.push("NowPage");
  }

  goTOUpcoming(){
    this.navCtrl.push("UpcomingPage")
  }

  goToPopular(){
    this.navCtrl.push("PopularPage")
  }

  gotoTop(){
    this.navCtrl.push("TopPage")
  }

}
