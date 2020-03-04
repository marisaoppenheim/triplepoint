import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from "react-router"
import { SingleDeal } from "./SingleDeal";
import Deal from "../types/Deal"
import { Party } from "../types/Party"
import Bid, { BidStatus } from "../types/Bid"
interface SingleDealAllDetailsProps extends RouteComponentProps<{ id: string }> { }

const SingleDealAllDetails = ({ match }: SingleDealAllDetailsProps) => {
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

  const allParties = [{
    id: "1",
    name: "Oppenheim Funds",
    deals: [{
      name: "Oppenheim Funds Equity Sale",
      partyId: "1",
      assetType: "equity",
      askingPrice: 10000000,
      bids: [],
      id: "1",
    },
    {
      name: "Oppenheim Fund Debt Sale",
      partyId: "1",
      assetType: "debt",
      askingPrice: 2500000,
      bids: [],
      id: "2",
    }],
    bids: [],
    city: "New York",
    state: "NY",
    img: "https://cdn4.vectorstock.com/i/1000x1000/42/38/space-rocket-cartoon-vector-1934238.jpg",
    aum: 2000000000,
    ceo: "Marisa Oppenheim",
    industry: "Technology",
  }, {
    id: "2",
    name: "Marisa Funds",
    deals: [],
    bids: [],
    city: "Dallas",
    state: "TX",
    img: "https://cdn4.vectorstock.com/i/1000x1000/12/73/a-classic-cartoon-style-black-round-bomb-lit-on-vector-20631273.jpg",
    aum: 750000000,
    ceo: "Marisa Oppenheim",
    industry: "Finance",
  },
  ]
  const [values, setValues] = useState("")
  const id = match.params.id

  const deal = allDeals.filter((x: Deal) => x.id === id)[0]
  const partyForDeal = allParties.filter((x: Party) => x.id === deal.partyId)[0]

  const offerPrices = deal.bids.map((x: Bid) => x.offerPrice)

  const highestBid = Math.max(...offerPrices)

  // if there was redux and backend acutally set up this would be a hook pulling it then the same filter by id

  // also operating under the assumption that you will be logged in as a user

  const handleInputChange = e => {
    return setValues(e.target.value)
  }

  return (
    <div>
      <div className="column">
        <h2>{deal.name}</h2>
        <img src={partyForDeal.img} width="150" height="250" />
        <div className="row">
          <h3 className="paddingRight1">{`Seller: ${partyForDeal.name}`}</h3>
          <h3 className="paddingRight1">{`Asking Price: ${deal.askingPrice}`}</h3>
          <h3 className="paddingRight1">{`Asset Type: ${deal.assetType}`}</h3>
          <h3>{`Current Highest Bid: ${highestBid}`}</h3>
        </div>
        {/* If backend was actually set up the button for Place bid would update the bid array. Also will not see button if logged in users id is same as item up for bid */}
        <form>
          <input type="text" value={Number(values)} onChange={handleInputChange} />
          < input type="button" value="Place Bid" />
        </form>
      </div>

    </div>
  )
}

export default withRouter(SingleDealAllDetails)
