import React from "react"
import { Party } from "../types/Party"

interface PartyProps {
  party: Party;
}

export const PartyComp = ({ party }: PartyProps) => {
  return (
    <h2 className="row">
      <a href={`/allParties/${party.id}`} className="aNoStyle">
        <div className="column">
          {party.name}
          <div className="paddingTop">
            <img src={party.img} width="300" height="350" />
          </div>
        </div>
      </a>
    </h2>
  )
}
