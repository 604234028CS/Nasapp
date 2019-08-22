import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-json',
  templateUrl: 'json.html',
})
export class JsonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonPage');
  }

  SimpleJsonPage(){
    this.navCtrl.push("SimpleJsonPage");
  }

  ArrayJsonPage(){
    this.navCtrl.push("ArrayJsonPage");
  }

  PostJsonPage(){
    this.navCtrl.push("PostJsonPage");
  }

}
