import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing/main/main.component';
import { LandingComponent } from './landing/landing/landing.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '**', component: MainComponent, children: [
      { path: '', component: LandingComponent }
    ]}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
