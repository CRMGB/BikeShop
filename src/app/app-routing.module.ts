import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { MountainBikesComponent } from './components/mountain-bikes/mountain-bikes.component';
import { RouteResolver } from './resolvers/route.resolver';
import { C2WSchemaComponent } from './components/c2-wschema/c2-wschema.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'mountain-bikes',
    component: MountainBikesComponent,
    resolve: {
      routeResolver: RouteResolver
    },
  },
  {
    path: 'c2-wschema',
    component: C2WSchemaComponent,
    resolve: {
      routeResolver: RouteResolver
    },
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})

export class AppRoutingModule { }
