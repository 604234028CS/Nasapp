import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top',
  templateUrl: 'top.html',
})
export class TopPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public topmovies: MoviesProvider) {
    this.loadtopdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopPage');
  }

  loadtopdata(){
    this.topmovies.getToprated().subscribe(topmovies =>{
      this.moviesArray = topmovies['results'];
    });
  }

  detail(item){
    this.navCtrl.push("MoviedetailPage",item);
  }

  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.topmovies.searchMovie(val).subscribe(topmovies => {
        this.moviesArray = topmovies['results'];
      });
    }else{
      this.loadtopdata();
    }
  }

}
