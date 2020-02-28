import React from "react"
import { PartyComp } from "./PartyComp"
import { Party } from "../types/Party"



export const Main = () => {
  // this is operating under the assumption that we have brought in all existing parties from backend

  const allParties = [{
    id: "1",
    name: "Oppenheim Funds",
    deals: [],
    bids: [],
  }, {
    id: "2",
    name: "Marisa Funds",
    deals: [],
    bids: [],
  }]
  return (
    <div>
      <h2>
        All Parties
     </h2>
      <ul className="flex">
        {allParties.map((party, index) => <PartyComp party={party} />)}
      </ul>
    </div>
  )
}
