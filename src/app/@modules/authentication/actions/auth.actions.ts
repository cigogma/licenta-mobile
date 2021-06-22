import { createAction, props } from "@ngrx/store";

export const loaded = createAction("[Auth Update] Loaded");
export const authorized = createAction(
  "[Auth Update] Authorized",
  props<{ token: string }>()
);
export const unauthorized = createAction("[Auth Update] Unauthorized");
