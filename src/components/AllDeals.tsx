import React from "react"
import { SingleDeal } from "./SingleDeal"
import Deal from "../types/Deal"
import { BidStatus } from "../types/Bid"



export const AllDeals = () => {
  // this is operating under the assumption that we have brought in all existing parties from backend

  const allDeals = [{
    name: "Oppenheim Funds Equity Sale",
    partyId: "1",
    assetType: "equity",
    askingPrice: 10000000,
    bids: [
      {
        partyId: "2",
        dealId: "1",
        offerPrice: 2150000,
        status: BidStatus.OPEN,
        id: "1"
      }
    ],
    id: "1",
  },
  {
    name: "Oppenheim Fund Debt Sale",
    partyId: "1",
    assetType: "debt",
    askingPrice: 2500000,
    bids: [],
    id: "2",
  }]
  return (
    <div>
      <ul className="flex">
        {allDeals.map((deal, index) => <SingleDeal deal={deal} index={index} />)}
      </ul>
    </div>
  )
}
