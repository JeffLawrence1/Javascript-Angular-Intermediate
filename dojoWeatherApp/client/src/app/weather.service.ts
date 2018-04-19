import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cdb2816cad4d37ea99a8264d7b3790b6`)
    .map( data => data.json() )
    .toPromise();
  }

}