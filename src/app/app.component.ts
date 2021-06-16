import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiKey: string = environment.apiKey;
  apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}";
  title = 'WeatherData';
  currentView: string = 'cityList';
  listOfEuropeanCities: any = [{ city: "London", country: "UK" },
  { city: "Moscow", country: "Russia" },
  { city: "Berlin", country: "Germany" },
  { city: "Paris", country: "France" },
  { city: "Rome", country: "Italy" },
  { city: "Valencia", country: "Spain" }];
  listOfObservables: any = [];
  listOfCityWithTemperature: any = [];

  constructor(private http: HttpClient, private Router: Router) {
    Router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/') {
          this.currentView = 'cityList';
        } else {
          this.currentView = 'cityforecast';
        }
      }
    });
  }
  getTemperatureForAllCities() {
    for (let i of this.listOfEuropeanCities) {
      this.listOfObservables.push(this.http.get(this.apiUrl.replace('{city_name}', i.city).replace('{API_key}', this.apiKey)));
    }
    forkJoin(this.listOfObservables).subscribe(results => {
      this.listOfCityWithTemperature = results;
    });
  }

  ngOnInit() {
    this.getTemperatureForAllCities();
  }
}