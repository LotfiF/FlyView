import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { BookingComponent } from './components/booking/booking.component';
import { FlightsComponent } from './components/flights/flights.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BookingComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
