import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);
export const selectToken = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.token
);
export const selectLoaded = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.loaded
);
export const selectLoading = createSelector(
  selectAuthState,
  (state: fromAuth.State) => !state.loaded
);
