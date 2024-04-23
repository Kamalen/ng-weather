import { NgModule } from '@angular/core';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabsComponent,
        TabComponent,

        WeatherIconPipe
    ],
    exports: [
        TabsComponent,
        TabComponent,

        WeatherIconPipe
    ]
})
export class SharedModule {

}
