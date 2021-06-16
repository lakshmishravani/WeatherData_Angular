import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'city-forecast',
	templateUrl: './city-forecast.component.html',
	styleUrls: []
})
export class CityForecastComponent {
	apiKey: string = environment.apiKey;
	apiUrl: string = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_key}";
	currentView: string = 'cityforecast';
	cityForecast: any = [];
	cityName: string = '';

	constructor(private http: HttpClient, private ActivatedRoute: ActivatedRoute) {
	}
	getForcast(lat: any, lon: any) {
		if (lat && lon) {
			let forecastApiUrl = this.apiUrl.replace('{lat}', lat).replace('{lon}', lon).replace('{API_key}', this.apiKey);
			this.http.get(forecastApiUrl).subscribe((results: any) => {
				if (results && results.list) {
				this.cityName = results.city.name;
					this.cityForecast = results.list.filter((x: any) => { return x.dt_txt.indexOf('09:00:00') > -1; });
				}
			});
		}
	}

	ngOnInit() {
		this.ActivatedRoute.paramMap.subscribe(params => {
			if (params) {
				this.getForcast(params.get('lat'), params.get('long'));
			}
		});
	}
}
