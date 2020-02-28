import { Dispatch } from "../utils"
import { fetchBidRequest, fetchBidSuccess, fetchBidFailure } from "./actions";
import Bid from "../../types/Bid";


// this would be the url trying to fetch data from
let url;


interface FetchBidResponseShape {
  bids: Bid[];
}

function fetchDeals() {
  return async (dispatch: Dispatch) => {
    // this would be the url requesting
    const requestUrl = url
    dispatch(fetchBidRequest());
    const res = await fetch(requestUrl);
    try {
      const json = await res.json();
      // @ts-ignore
      const { bids } = json

      let bidsObj = bids.reduce((accum: { [key: string]: Bid }, nextBid: Bid) => {
        accum[nextBid.id] = nextBid;
        return accum;
      }, {});

      dispatch(fetchBidSuccess(bidsObj));
    } catch (e) {
      dispatch(fetchBidFailure(e.message));
    }
  };
}
