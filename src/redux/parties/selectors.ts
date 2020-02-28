import { createSelector } from "reselect"
import { WrappedPartyState } from "./index"

export const partySelector = (partiesState: WrappedPartyState) => partiesState.data;

export const partiesList = createSelector(partySelector, parties => {
  return Object.values({ ...parties })
});
