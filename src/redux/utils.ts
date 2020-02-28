import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "./index";
import { AnyAction } from "redux";

export interface stateContainer<T> {
  readonly data: T;
  readonly error?: any;
  readonly loading: boolean;
}

export type Dispatch = ThunkDispatch<ApplicationState, {}, AnyAction>;

export const createInitialState: <T>(init: T) => stateContainer<T> = init => ({
  data: init,
  loading: false,
  error: null,
});

export const isEmpty = (obj: any) => !obj || !Object.keys(obj).length;
