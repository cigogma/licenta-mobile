import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDevicesComponent } from './station-devices.component';

describe('StationDevicesComponent', () => {
  let component: StationDevicesComponent;
  let fixture: ComponentFixture<StationDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
