import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";

export const authFeatureKey = "auth";

export interface State {
  loaded: boolean;
  token: string;
}

export const initialState: State = {
  loaded: false,
  token: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.authorized, (state, { token }) => {
    return { loaded: true, token };
  }),
  on(AuthActions.unauthorized, (state) => {
    return { ...state, token: null };
  }),
  on(AuthActions.loaded, (state) => {
    return { ...state, loaded: true };
  })
);

export function reducer(state: State | undefined, action) {
  return authReducer(state, action);
}
