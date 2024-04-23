import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";
import { BehaviorSubject, Subject } from 'rxjs';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations$.next(JSON.parse(locString));
  }

  addLocation(zipcode : string) {
    this.locations$.next([...this.locations$.getValue(), zipcode]);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations$.getValue()));
  }

  removeLocation(zipcode : string) {
    const locations = [...this.locations$.getValue()]
    let index = this.locations$.getValue().indexOf(zipcode);
    if (index !== -1){
      locations.splice(index, 1);
      this.locations$.next(locations)
      localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }
  }
}
