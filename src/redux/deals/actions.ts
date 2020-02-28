import Deal from "../../types/Deal"
import { createAction } from "@reduxjs/toolkit";

export enum DealActionTypes {
  FETCH_DEAL_REQUEST = "FETCH_DEAL_REQUEST",
  FETCH_DEAL_SUCCESS = "FETCH_DEAL_SUCCESS",
  FETCH_DEAL_FAILURE = "FETCH_DEAL_FAILURE",
}

export const fetchDealRequest = createAction(DealActionTypes.FETCH_DEAL_REQUEST);

export const fetchDealSuccess = createAction<{ [key: string]: Deal }>(
  DealActionTypes.FETCH_DEAL_SUCCESS
);

export const fetchDealFailure = createAction<string>(DealActionTypes.FETCH_DEAL_FAILURE);
