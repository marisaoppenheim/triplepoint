import Deal from "../../types/Deal";
import { Dispatch } from "../utils"
import { fetchDealRequest, fetchDealSuccess, fetchDealFailure } from "./actions";


// this would be the url trying to fetch data from
let url;


interface FetchDealResponseShape {
  deals: Deal[];
}

function fetchDeals() {
  return async (dispatch: Dispatch) => {
    // this would be the url requesting
    const requestUrl = url
    dispatch(fetchDealRequest());
    const res = await fetch(requestUrl);
    try {
      const json = await res.json();
      // @ts-ignore
      const { deals } = json

      let dealsObj = deals.reduce((accum: { [key: string]: Deal }, nextDeal: Deal) => {
        accum[nextDeal.id] = nextDeal;
        return accum;
      }, {});

      dispatch(fetchDealSuccess(dealsObj));
    } catch (e) {
      dispatch(fetchDealFailure(e.message));
    }
  };
}
