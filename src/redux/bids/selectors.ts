import { createSelector } from "reselect"
import { WrappedBidState } from "./index"

export const bidSelector = (bidsState: WrappedBidState) => bidsState.data;

export const bidsList = createSelector(bidSelector, bids => {
  return Object.values({ ...bids })
});
