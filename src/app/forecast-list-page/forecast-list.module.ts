import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { routing } from './forecast-list.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ForecastsListComponent
    ]
})
export class ForecastListModule {

}
