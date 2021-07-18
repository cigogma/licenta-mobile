import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDeviceComponent } from './station-device.component';

describe('StationDeviceComponent', () => {
  let component: StationDeviceComponent;
  let fixture: ComponentFixture<StationDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
