import { createReducer } from "@reduxjs/toolkit";
import { createInitialState } from "../utils";
import { WrappedPartyState } from "./index";
import { fetchPartyFailure, fetchPartyRequest, fetchPartySuccess } from "./actions";

export const reducer = createReducer<WrappedPartyState>(createInitialState({}), {
  [fetchPartyRequest.type]: state => ({ ...state, loading: true, error: null }),
  [fetchPartySuccess.type]: (state, { payload }) => {
    return {
      data: { ...state.data, ...payload },
      loading: false,
      error: null,
    };
  },
  [fetchPartyFailure.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});
