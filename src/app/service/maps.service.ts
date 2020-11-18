
import { AfterViewInit, ElementRef, Injectable, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { HomeComponent } from './../components/home/home.component'

@Injectable()

export class MapService {
    @ViewChild(HomeComponent) child;
    visible: boolean;

    initializeMap() {
        const lngLat = new google.maps.LatLng(6.5874964, 3.9886097);
        const mapOptions: google.maps.MapOptions = {
        center: lngLat,
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false
        };
        return mapOptions;
    }
}
