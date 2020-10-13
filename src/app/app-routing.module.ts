import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { FlightsComponent } from './components/flights/flights.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
