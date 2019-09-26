import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=7552e9af1bfb832332c3005ada3d28a7';
  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }
  getNow(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  getPopular(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }

  getUpcoming(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }

  getToprated(){
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }

  searchMovie(query) {
    const url = this.baseURL + 'search/movie?query=' + query + '&' + this.apiKey;
    return this.http.get(url);
  }

  getVideos(movieID){
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }
  

}
