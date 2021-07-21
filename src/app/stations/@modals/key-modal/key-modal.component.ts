import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StationApiKey } from 'src/app/@modules/station';
import { Components } from '@ionic/core';
@Component({
  selector: 'app-key-modal',
  templateUrl: './key-modal.component.html',
  styleUrls: ['./key-modal.component.scss'],
})
export class KeyModalComponent implements OnInit {
  @Input()
  token: StationApiKey;
  @Input()
  plainTextKey: string;

  @Input()
  modal: Components.IonModal;
  constructor(private toast: ToastController) {}
  close() {
    this.modal.dismiss();
  }
  ngOnInit() {}
  async copyToClipboard(key: string) {
    await navigator.clipboard.writeText(key);
    const toast = await this.toast.create({
      message: 'Key copied to clipboard',
      duration: 1000,
    });
    await toast.present();
  }
}
