import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  public routes = routes;
  constructor() { }
}
