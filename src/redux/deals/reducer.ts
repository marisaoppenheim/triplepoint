import { createReducer } from "@reduxjs/toolkit";
import { createInitialState } from "../utils";
import { WrappedDealState } from "./index";
import { fetchDealFailure, fetchDealRequest, fetchDealSuccess } from "./actions";

export const reducer = createReducer<WrappedDealState>(createInitialState({}), {
  [fetchDealRequest.type]: state => ({ ...state, loading: true, error: null }),
  [fetchDealSuccess.type]: (state, { payload }) => {
    return {
      data: { ...state.data, ...payload },
      loading: false,
      error: null,
    };
  },
  [fetchDealFailure.type]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});
