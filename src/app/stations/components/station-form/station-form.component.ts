import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Station } from 'src/app/@modules/station/models/station.model';

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss'],
})
export class StationFormComponent implements OnInit {
  @Input()
  station: Station;

  form: FormGroup = new FormGroup({
    alias: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
}
