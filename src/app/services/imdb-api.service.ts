import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class ImdbApiService {

  constructor(
     private http: HttpClient,
     private CONSTANT: Config,
  ) { }

  getMostPopularMovies():Observable<any>{
    const URL = environment.imdbApiUrl + this.CONSTANT.MOSTPOPULARMOVIE + '/' + environment.apiKey
    return this.http.get(URL)
  }

  getMostPopularTVs():Observable<any>{
    const URL = environment.imdbApiUrl + this.CONSTANT.MOSTPOPULARTVSERIES + '/' + environment.apiKey
    return this.http.get(URL)
  }

  getComingSoon():Observable<any>{
    const URL = environment.imdbApiUrl + this.CONSTANT.COMINGSOON + '/' + environment.apiKey
    return this.http.get(URL)
  }
}
