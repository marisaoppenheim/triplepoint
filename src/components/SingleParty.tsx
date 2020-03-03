import React from "react"
import { PartyComp } from "./PartyComp"
import { Party } from "../types/Party"



export const SingleParty = () => {
  // this is operating under the assumption that we have brought in all existing parties from backend

  const allParties = [{
    id: "1",
    name: "Oppenheim Funds",
    deals: [],
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
  return (
    <div>
      <h2>Trying</h2>
    </div>
  )
}
