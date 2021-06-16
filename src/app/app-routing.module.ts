import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CityForecastComponent} from './city-forecast.component';

const routes: Routes = [{path: 'cityforecast/:lat/:long', component: CityForecastComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
