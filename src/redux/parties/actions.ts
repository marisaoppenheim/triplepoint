import { Party } from "../../types/Party"
import { createAction } from "@reduxjs/toolkit";

export enum PartyActionTypes {
  FETCH_PARTY_REQUEST = "FETCH_PARTY_REQUEST",
  FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS",
  FETCH_PARTY_FAILURE = "FETCH_PARTY_FAILURE",
}

export const fetchPartyRequest = createAction(PartyActionTypes.FETCH_PARTY_REQUEST);

export const fetchPartySuccess = createAction<{ [key: string]: Party }>(
  PartyActionTypes.FETCH_PARTY_SUCCESS
);

export const fetchPartyFailure = createAction<string>(PartyActionTypes.FETCH_PARTY_FAILURE);
