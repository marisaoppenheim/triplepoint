import { createSelector } from "reselect"
import { WrappedDealState } from "./index"

export const dealSelector = (dealsState: WrappedDealState) => dealsState.data;

export const dealsList = createSelector(dealSelector, deals => {
  return Object.values({ ...deals })
});
