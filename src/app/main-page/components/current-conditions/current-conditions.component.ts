import {Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../../../shared/services/weather.service";
import {LocationService} from "../../../shared/services/location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../../../shared/types/conditions-and-zip.type';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);

  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions()

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
