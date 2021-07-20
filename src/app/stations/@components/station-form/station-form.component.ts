import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Station } from 'src/app/@modules/station';

@Component({
  selector: 'app-station-form',
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.scss'],
})
export class StationFormComponent implements OnInit {
  @Input()
  station: Station;
  @Output()
  formSubmit = new EventEmitter();

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
    if (this.station) {
      console.log(this.station);
      const { name } = this.station;
      this.form.patchValue({
        name,
      });
    }
  }

  submit() {
    const data = this.form.getRawValue();
    this.formSubmit.emit(new CustomEvent('formSubmit', { detail: data }));
  }
}
