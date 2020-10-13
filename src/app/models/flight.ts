export class Flight 
{
    nbrFlight: string;
    fromCity: string;
    toCity: string;
    departDate: Date;
    returnDate: Date;
    nbrPassengers: number;

    constructor(nbrFlight, fromCity, toCity, departDate, returnDate, nbrPassengers)
    {
        this.nbrFlight = nbrFlight;
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.departDate = departDate;
        this.returnDate = returnDate;
        this.nbrPassengers = nbrPassengers;
    }
}
