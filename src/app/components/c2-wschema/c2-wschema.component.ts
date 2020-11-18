import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { C2S } from 'src/app/model/c2-schema.register';
import { MapService } from 'src/app/service/maps.service';
// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-c2-wschema',
  templateUrl: './c2-wschema.component.html',
  styleUrls: ['./c2-wschema.component.css']
})
export class C2WSchemaComponent implements OnInit {
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;
  calcForm: FormGroup;
  submitted = false;
  map: google.maps.Map;
  mapOptions: Object;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private mapService: MapService,
    ) { }

  ngOnInit() {
    const numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
      this.calcForm = this.formBuilder.group({
        salary: ['', [Validators.required,Validators.pattern(numericNumberReg)]],
        payment: ['', [Validators.required,Validators.pattern(numericNumberReg)]],
        frecuency: ['', [Validators.required,]]
          // email: ['', [Validators.required, Validators.email]],
          // password: ['', [Validators.required, Validators.minLength(6)]],
          // confirmPassword: ['', Validators.required]
      }, {
          // validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.calcForm.controls; }

  get myForm() {
    return this.calcForm.get('frecuency');
  }
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.calcForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.calcForm.value))
  }


  submit(){
    this.myForm;
    this.f;
  }
  ngAfterViewInit() {
    this.mapOptions = this.mapService.initializeMap();
    this.generateMap();
  }
  // createContactForm(){
  //   this.formGroup = this.formBuilder.group({
  //     salary: new FormControl(''),  
  //     payment: new FormControl(''),
  //   });
  // }

  generateMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }
}
