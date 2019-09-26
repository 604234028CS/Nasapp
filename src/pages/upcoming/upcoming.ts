import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public upcomingmovies: MoviesProvider) {
    this.loadupcomingdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  loadupcomingdata(){
    this.upcomingmovies.getUpcoming().subscribe(upcomingmovies =>{
      this.moviesArray = upcomingmovies['results'];
    });
  }

  detail(item){
    this.navCtrl.push("MoviedetailPage",item);
  }
  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.upcomingmovies.searchMovie(val).subscribe(upcomingmovies => {
        this.moviesArray = upcomingmovies['results'];
      });
    }else{
      this.loadupcomingdata();
    }
  }

}
