import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBikesComponent } from './demo-bikes.component';

describe('DemoBikesComponent', () => {
  let component: DemoBikesComponent;
  let fixture: ComponentFixture<DemoBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
