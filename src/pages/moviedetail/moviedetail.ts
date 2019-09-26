
import { MoviesProvider } from './../../providers/movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the MoviedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage {

detail: any = [];
movie: any;
movieDetails: any;
backdrop_path: any;
geners: any;
videos: any = [];
Budget: any;
status: any;
revenue: any;
imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public moviedetail: MoviesProvider,private tts: TextToSpeech) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  };

  openVideo(key){
    this.navCtrl.push('VideoPage',key);
  }

  goTOMovie(){
    this.navCtrl.push("MoviesPage");
  }
    
  
  talk(textOrOptions){
    console.log(textOrOptions);
    this.tts.speak(textOrOptions)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));

  }

}
