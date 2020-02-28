import { createReducer } from "@reduxjs/toolkit";
import { createInitialState } from "../utils";
import { WrappedBidState } from "./index";
import { fetchBidFailure, fetchBidRequest, fetchBidSuccess } from "./actions";

export const reducer = createReducer<WrappedBidState>(createInitialState({}), {
  [fetchBidRequest.type]: state => ({ ...state, loading: true, error: null }),
  [fetchBidSuccess.type]: (state, { payload }) => {
    return {
      data: { ...state.data, ...payload },
      loading: false,
      error: null,
    };
  },
  [fetchBidFailure.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});
