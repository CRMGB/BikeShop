import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from './../../service/maps.service'
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;
  mapOptions: Object
  constructor(
    private mapService: MapService,
  ) { }

  ngOnInit() {
    (function ($) {
      $(document).ready(function ($) {
        //initMap();
        $('#preloader').delay(400).fadeOut();
      });
    })(jQuery);

  }
  ngAfterViewInit() {
    this.mapOptions = this.mapService.initializeMap();
    this.generateMap();
  }

  generateMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }

}
