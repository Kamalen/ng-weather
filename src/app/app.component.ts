import { Component, OnInit } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { WeatherService } from './shared/services/weather.service';
import { pairwise, startWith } from 'rxjs/operators';
import { difference } from './shared/utils/array.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private locationService: LocationService,
                private weatherService: WeatherService) {

    }

    ngOnInit() {
        // To not simply invert the service dependencies, 'cause the conditions could simply come from anywhere else, it's the app component that has to connect the two
        this.locationService.locations$.pipe(
            startWith([] as string[]),
            pairwise(),
        ).subscribe(([previous, next]) => {
            // Using difference with previous to compute added and removed
            const newElements = difference(next, previous)
            const removedElements = difference(previous, next)

            newElements.forEach(l => this.weatherService.addCurrentConditions(l))
            removedElements.forEach(l => this.weatherService.removeCurrentConditions(l))
        })
    }
}
