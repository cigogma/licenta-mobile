import { ModuleWithProviders, NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthEffects } from "./effects/auth.effects";
import { authFeatureKey, reducer } from "./reducers/auth.reducer";
import { AuthenticationService } from "./services";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(authFeatureKey, reducer),
  ],
})
export class AuthenticationModule {
  public static forRoot(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationService],
    };
  }
}
