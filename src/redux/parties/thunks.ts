import { Party } from "../../types/Party";
import { Dispatch } from "../utils"
import { fetchPartyRequest, fetchPartySuccess, fetchPartyFailure } from "./actions";


// this would be the url trying to fetch data from
let url;


interface FetchPartyResponseShape {
  parties: Party[];
}

function fetchParties() {
  return async (dispatch: Dispatch) => {
    // this would be the url requesting
    const requestUrl = url
    dispatch(fetchPartyRequest());
    const res = await fetch(requestUrl);
    try {
      const json = await res.json();
      // @ts-ignore
      const { parties } = json

      let partiesObj = parties.reduce((accum: { [key: string]: Party }, nextParty: Party) => {
        accum[nextParty.id] = nextParty;
        return accum;
      }, {});

      dispatch(fetchPartySuccess(partiesObj));
    } catch (e) {
      dispatch(fetchPartyFailure(e.message));
    }
  };
}
