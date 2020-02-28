import { combineReducers } from "redux";
import { reducer as bids } from "./bids/reducer"
import { reducer as deals } from "./deals/reducer"
import { reducer as parties } from "./parties/reducer"

export const combinedReducers = combineReducers({
  bids,
  deals,
  parties
});

export type ApplicationState = ReturnType<typeof combinedReducers>;
