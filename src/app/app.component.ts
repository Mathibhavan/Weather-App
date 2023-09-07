import { Component } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';

  city:string[] =['Madurai','Chennai','Mumbai','Hybd','Delhi'];
  //city:string='Mumbai';
  units:string='imperial';
  myweather:any;
  temperature:number | undefined;
  feelslike:number | undefined;
  pressure:number|undefined;
  humidity:number|undefined;
  summary:string='';
  icon:string='';

  constructor(private weather: WeatherService){}

  ngOnInit() :void{
    this.weather.getweather(this.city,this.units).subscribe({
      next:(res)=>{
        this.myweather=res;
        this.temperature=this.myweather.main.temp;
        this.feelslike=this.myweather.main.feels_like;
        this.pressure=this.myweather.main.pressure;
        this.humidity=this.myweather.main.humidity;
        this.summary=this.myweather.weather[0].main;
        this.icon='https://openweathermap.org/img/wn/' +this.myweather.weather[0].icon+ '@2x.png';
      },
      error:(error)=> console.log(error.message),
      complete() {
          console.log('Done');
      },


    });

  }

}
