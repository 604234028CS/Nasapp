import { MoviedetailPage } from './../moviedetail/moviedetail';
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popularmovies: MoviesProvider) {
    this.loadpopulardata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }
  loadpopulardata(){
    this.popularmovies.getPopular().subscribe(popularmovies =>{
      this.moviesArray = popularmovies['results'];
    });
  }

  detail(item){
    this.navCtrl.push("MoviedetailPage",item);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.popularmovies.searchMovie(val).subscribe(popularmovies => {
        this.moviesArray = popularmovies['results'];
      });
    }else{
      this.loadpopulardata();
    }
  }

  

}
