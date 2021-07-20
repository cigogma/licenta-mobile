import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDeviceItemComponent } from './station-device-item.component';

describe('StationDeviceItemComponent', () => {
  let component: StationDeviceItemComponent;
  let fixture: ComponentFixture<StationDeviceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDeviceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDeviceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
