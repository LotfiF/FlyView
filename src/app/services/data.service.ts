import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cities: Array<string> = ['Alger', 'Tunis', 'Casablanca', 'Paris', 'Madrid', 'Rome'];
  private flights: Array<Flight> = [];

  citiesSubject = new Subject<string[]>();
  flightsSubject = new Subject<Flight[]>();

  constructor() { }

  addFlight(flight: Flight)
  {
    this.flights.push(flight);
    console.log(this.flights);
  }

  deleteFlightByNbr(nbrFlight: string)
  {
    for (let index=0; index<this.flights.length; ++index)
    {
      if (this.flights[index].nbrFlight===nbrFlight)
        this.flights.splice(index, 1);
    }
  }

  emitCities()
  {
    this.citiesSubject.next(this.cities.slice());
  }

  emitFlights()
  {
    this.flightsSubject.next(this.flights.slice());
  }
}
