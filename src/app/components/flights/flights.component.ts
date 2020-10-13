import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit, OnDestroy
{
  flights: Array<Flight>;
  flightsSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() 
  {
    this.flightsSubscribe();
    this.dataService.emitFlights();
  }

  flightsSubscribe()
  {
    this.flightsSubscription = this.dataService.flightsSubject.subscribe(
      data => {
        this.flights = data;
      }
    );
  }

  deleteFlightByNbr(nbrFlight: string)
  {
    this.dataService.deleteFlightByNbr(nbrFlight);
    this.dataService.emitFlights();
  }
  
  ngOnDestroy()
  {
    this.flightsSubscription.unsubscribe();
  }
}