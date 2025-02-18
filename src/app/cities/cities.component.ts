import { Component,  OnInit  } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {
  cities = [
    {
      city: 'Los Angeles',
      temp: '',
      Notice: 'North the Greenwich line'
    },
    {
      city: 'London',
      temp: '',
      Notice: 'North the Greenwich line'
    },
    {
      city: 'cairo',
      temp: '',
      Notice: 'south the Greenwich line'
    },
    {
      city: 'Chicago',
      temp: '',
      Notice: 'south the Greenwich line'
    },
    {
      city: 'Paris',
      temp: '',
      Notice: ''
    },
    {
      city: 'Barcelona',
      temp: '',
      Notice: ''
    },
    {
      city: 'Miami',
      temp: '',
      Notice: ''
    },
    {
      city: 'Dubai',
      temp: '',
      Notice: ''
    },
    {
      city: 'Hong Kong',
      temp: '',
      Notice: ''
    },
    {
      city: 'Shanghai',
      temp: '',
      Notice: ''
    },
    {
      city: 'Tokyo',
      temp: '',
      Notice: ''
    },
    {
      city: 'Berlin',
      temp: '',
      Notice: ''
    },
    {
      city: 'Madrid',
      temp: '',
      Notice: ''
    },
    {
      city: 'Amsterdam',
      temp: '',
      Notice: ''
    },
    {
      city: 'Rosario',
      temp: '',
      Notice: ''
    },
    ]



  constructor(private weatherService: WeatherService) {}
 
  ngOnInit(): void {
  this.cities.forEach(city => {
    this.weatherService.loadWeather(city.city).subscribe(data => {
      city.temp = `${ data.main.temp } °C`;
      //city.Notice = `${ data.weather.main } (description)`  ; 
    });
 });
  
  }
  
};
