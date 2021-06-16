import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CityForecastComponent} from './city-forecast.component';
import { KelvinToCelsius } from './conversion.pipe';
import { UnixToDateTime } from './conversion.pipe';
import { UnixToDate } from './conversion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CityForecastComponent,
    KelvinToCelsius,
    UnixToDateTime,
    UnixToDate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
