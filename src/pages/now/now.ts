import { MovieAppPage } from './../movie-app/movie-app';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now',
  templateUrl: 'now.html',
})
export class NowPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie: MoviesProvider) {
    this.loadnowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPage');

  }
loadnowdata(){
  this.nowmovie.getNow().subscribe(nowmovies =>{
    this.moviesArray=nowmovies['results'];
  });
}

detail(item){
  this.navCtrl.push("MoviedetailPage",item);
}

Movieapp(){
  this.navCtrl.push(MovieAppPage);
}

onEvent(ev: any) {
  let val = ev.target.value;
  if(val.length !== 0){
    this.nowmovie.searchMovie(val).subscribe(nowmovies => {
      this.moviesArray = nowmovies['results'];
    });
  }else{
    this.loadnowdata();
  }
}

}
//end
