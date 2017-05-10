import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFundMeComponent } from './add-fund-me/add-fund-me.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'add/FundMe',
    component: AddFundMeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
