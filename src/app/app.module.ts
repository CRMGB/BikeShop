import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarService } from './service/navbar.service'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsersListService } from './service/users-list.service';
import { MapService } from './service/maps.service';
import { MountainBikesComponent } from './components/mountain-bikes/mountain-bikes.component';
import { C2WSchemaComponent } from './components/c2-wschema/c2-wschema.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoBikesComponent } from './components/demo-bikes/demo-bikes.component';

declare  var jQuery:  any;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    MountainBikesComponent,
    C2WSchemaComponent,
    DemoBikesComponent,
    //NavbarService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
    //NavbarService
  ],
  exports: [
    MatDialogModule
  ],
  providers: [UsersListService, NavbarService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
