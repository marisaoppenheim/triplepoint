import Bid from "../../types/Bid"
import { createAction } from "@reduxjs/toolkit";

export enum BidActionTypes {
  FETCH_BID_REQUEST = "FETCH_BID_REQUEST",
  FETCH_BID_SUCCESS = "FETCH_BID_SUCCESS",
  FETCH_BID_FAILURE = "FETCH_BID_FAILURE",
}

export const fetchBidRequest = createAction(BidActionTypes.FETCH_BID_REQUEST);

export const fetchBidSuccess = createAction<{ [key: string]: Bid }>(
  BidActionTypes.FETCH_BID_SUCCESS
);

export const fetchBidFailure = createAction<string>(BidActionTypes.FETCH_BID_FAILURE);
