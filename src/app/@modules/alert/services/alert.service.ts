import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { from, Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private alertController: AlertController) {}
  presentAlert(options: any): Observable<HTMLIonAlertElement> {
    return from(this.alertController.create(options)).pipe(
      tap((alert) => {
        alert.present();
      })
    );
  }

  presentConfirm(options) {
    return this.presentAlert({
      header: "Alert",
      buttons: [
        {
          role: "cancel",
          text: "Cancel",
        },
        {
          role: "continue",
          text: "Ok",
        },
      ],
      ...options,
    }).pipe(
      switchMap((alert) => {
        return from(alert.onDidDismiss()).pipe(map((data) => data.role));
      })
    );
  }
  presetErrors(error: any) {
    let errors = "";
    if (error.errors) {
      Object.keys(error.errors).forEach((key) => {
        if (error.errors?.[key]?.[0]) {
          errors += error.errors[key][0] + "\n";
        }
      });
    }

    const alert = this.presentAlert({
      header: "Error",
      subHeader: error.message,
      message: errors,
      buttons: ["OK"],
    });
    return alert;
  }
}
