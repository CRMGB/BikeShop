import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/service/maps.service';

@Component({
  selector: 'app-mountain-bikes',
  templateUrl: './mountain-bikes.component.html',
  styleUrls: ['./mountain-bikes.component.css']
})
export class MountainBikesComponent implements OnInit {
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;
  mapOptions: Object
  constructor(private mapService: MapService) {}
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.mapOptions = this.mapService.initializeMap();
    this.generateMap();
  }

  generateMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }
}
