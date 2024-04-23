import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/components/main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast', loadChildren: () => import('./forecast-list-page/forecast-list.module').then(m => m.ForecastListModule)
  }
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {});
