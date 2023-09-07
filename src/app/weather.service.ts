import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  function: any;

  constructor(private http: HttpClient) {}

  getweather(city:any,units:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=47651ccf76d0c6e9bdefa5654d0c1b2f&units='+ units);
  }
}
