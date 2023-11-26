import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'overview', loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent) },
  { path: 'tutorials', loadComponent: () => import('./pages/tutorials/tutorials.component').then(m => m.TutorialsComponent) },
  { path: 'playground', loadComponent: () => import('./pages/playground/playground.component').then(m => m.PlaygroundComponent) },
  { path: 'api', loadComponent: () => import('./pages/api/api.component').then(m => m.ApiComponent) },
  // { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
  //{ path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  public routes = routes;
  constructor() { }
}
