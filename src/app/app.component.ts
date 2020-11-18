import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import { OverlayMenu } from "./components/overlay-menu/overlay-menu-component";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from './service/navbar.service';

declare var jQuery: any;
let header = document.getElementById('navMain')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  name = 'Angular';
  title = 'angular-starter';
  version = 'Angular version 10.0.14';
  // latitude = 51.440027799999996;
  // longitude = 0.0351658;
  // mapType = 'satellite';
  notify: string;
  
  @ViewChild('buttonMenu') buttonMenu: ElementRef;
   constructor(
     public dialog: MatDialog,
     public nav: NavbarService, 
    //  private router: Router, 
    //  private route: ActivatedRoute
  ) {} 

  ngOnInit() {
    (function ($) {
      $(document).ready(function ($) {
        //initMap();
        $('#preloader').delay(400).fadeOut();
      });
    })(jQuery);
    this.nav.show();
    // this.route.queryParams.subscribe(params => {
    //   if (params.success === 'true') {
    //     this.notify = 'You have passed data';
    //   }
    // });
    /*---------------------------------------------------------------------
                        GOOGLE MAP SCRIPT 51.440027799999996, 0.0351658
    ---------------------------------------------------------------------*/
    // function initMap() {
    //   // Creating a new variable to hold my lat and lng
    //   var officeLocation = { lat: 51.440027799999996, lng: 0.0351658 };
    //   var map;
    //   // Create a map object and specify the DOM element for display.
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: officeLocation,
    //     scrollwheel: false,
    //     zoom: 16,
    //   });
    //   var marker = new google.maps.Marker({
    //     position: officeLocation,
    //     map: map,
    //     title: 'Find us here!',
    //   });

    //   var popupAddress = 'The Vintage Apparel Company, 2nd Floor<br />';
    //   popupAddress += 'St. Clare House<br />';
    //   popupAddress += '30-33 Minories<br />';
    //   popupAddress += 'London EC3N 1DD<br />';

      // var infowindow = new google.maps.InfoWindow({
      //   content: popupAddress,
      //   maxWidth: 300,
      // });
      // marker.addListener('click', function () {
      //   infowindow.open(map, marker);
      // });
    // }
  }
  
  openMenu(): void{
    let dialogRef = this.dialog.open(OverlayMenu, {
      panelClass: 'custom-dialog-container',
      height:  '100vh',
      maxWidth: 'inherit',
      width: 'inherit'
      // maxWidth: 'unset !important',
      // maxHeight: '100vh',
      // hasBackdrop: false
    });
    this.nav.hide();
  }
}
