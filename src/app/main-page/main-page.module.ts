import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,

        RouterModule
    ],
    declarations: [
        MainPageComponent,
        ZipcodeEntryComponent,
        CurrentConditionsComponent
    ]
})
export class MainPageModule {

}
