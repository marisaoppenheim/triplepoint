import React from "react"
import { PartyComp } from "./PartyComp"
import { Party } from "../types/Party"

import { RouteComponentProps, withRouter } from "react-router"
import { SingleDeal } from "./SingleDeal";
import Deal from "../types/Deal"

interface SinglePartyProps extends RouteComponentProps<{ id: string }> { }

const SingleParty = ({ match }: SinglePartyProps) => {
  // this is operating under the assumption that we have brought in all existing parties from backend

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

  const id = match.params.id

  const party = allParties.filter((x: Party) => x.id === id)[0]
  // if there was redux and backend acutally set up this would be a hook pulling it then the same filter by id
  return (
    <div>
      <div className="column">
        <h2 >{party.name}</h2>
        <img src={party.img} width="150" height="250" />
        <h3>{`${party.city}, ${party.state}`}</h3>
        <div className="row">
          <h3 className="paddingRight1">{`Relevant Industry: ${party.industry}`}</h3>
          <h3 className="paddingRight1">{`CEO: ${party.ceo}`}</h3>
          <h3>{`AUM: ${party.aum}`}</h3>
        </div>

      </div>
      <h1 className="openDeals">
        Open Deals
        </h1>
      <ul>
        {party.deals.map((deal: Deal, index: number) => <SingleDeal deal={deal} index={index} />)}
      </ul>
    </div>
  )
}

export default withRouter(SingleParty)
