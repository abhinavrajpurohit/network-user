/**
 |--------------------------------------------------------------
 | Application Routing!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 * App Main Route
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/network/network.module').then(m => m.NetworkModule)
  }
];

/*
 * Decorator with its metadata
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * Exporting App Routing
 */
export class AppRoutingModule { }
