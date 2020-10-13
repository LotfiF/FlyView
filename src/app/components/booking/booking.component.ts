import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit, OnDestroy
{
  cities: Array<string>;
  today: Date;
  defaultDate: string;
  defaultNbrPassengers: number;
  
  flightsSubscription: Subscription;
  citiesSubscription: Subscription;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() 
  {
    this.citiesSubscribe();
    this.dataService.emitCities();
    this.cities.sort();

    this.today = new Date();
    this.defaultDate = this.today.toISOString().substring(0, 10);
    this.defaultNbrPassengers = 1;
  }

  citiesSubscribe()
  {
    this.citiesSubscription = this.dataService.citiesSubject.subscribe(
      data => {
        this.cities = data;
      }
    );
  }

  onSubmit(form: NgForm)
  {
    const fv = form.value;
    const flight = new Flight(
      form.value['nbrFlight'],
      fv['fromCity'],
      fv['toCity'],
      fv['departDate'],
      fv['returnDate'],
      fv['nbrPassengers']
    );

    console.log(flight);
    
    this.addFlight(flight);
    
    //form.reset();
    this.router.navigate(['/flights']);
  }

  addFlight(flight: Flight)
  {
    this.dataService.addFlight(flight);
    this.dataService.emitFlights();
  }

  ngOnDestroy()
  {
    //this.flightsSubscription.unsubscribe();
  }
}