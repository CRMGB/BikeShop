import {Component, Inject, NgModule, ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, Routes } from '@angular/router';
//import { MountainBikesC } from '../mountain-bikes/mountain-bikes.component'
import { UsersComponent } from '../users/users.component'
import { Router } from '@angular/router';
import { NavbarService } from '../../service/navbar.service';

import 'web-animations-js';
declare var jQuery: any;

// const routes: Routes = [
//   { path: 'mountain-bikes', component: MountainBikesC}
// ];

@Component({
    selector: 'overlay-menu',
    templateUrl: 'overlay-menu.html',
    styleUrls: ['overlay-menu.scss'],
  })
  export class OverlayMenu {
    // faWindowClose = faWindowClose
    constructor(private router: Router,
      public nav: NavbarService,
      public dialogRef: MatDialogRef<OverlayMenu>
      ) {}

    onNoClick(): void {
      // this.router.navigate(['/']);
      this.dialogRef.close();
      this.nav.show();
    }
    mountainBikes(): void {
      this.router.navigate(['/mountain-bikes']);
      this.dialogRef.close();
      this.nav.show();
    }
    C2WS(){
      this.router.navigate(['/c2-wschema']);
      this.dialogRef.close();
      this.nav.show();
    }
    ngOnDestroy() {
      console.log("Component Destroyed")
    }
  
  }
  
  

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   templateUrl: 'overlay-menu.html',
// })
// export class OverlayMenu {
//   constructor(private router: Router) {}

//   goToScreen2(): void {
//     this.router.navigate(['/dialog/screen2'], {
//       skipLocationChange: true,
//     });
//   }
// }