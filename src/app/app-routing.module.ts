import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './landing/main/main.component';
import { LandingComponent } from './landing/landing/landing.component';
import { DiplomaturaComponent } from './landing/diplomatura/diplomatura.component';
import { ActualizacionesComponent } from './landing/actualizaciones/actualizaciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: MainComponent, children: [
      { path: '', component: LandingComponent },
      { path: 'diplomaturas', component: DiplomaturaComponent },
      { path: 'actualizaciones', component: ActualizacionesComponent }
    ]}
  ], {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50],
    relativeLinkResolution: 'legacy',  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
