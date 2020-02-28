import React from "react"
import { Party } from "../types/Party"

interface PartyProps {
  party: Party;
}

export const PartyComp = ({ party }: PartyProps) => {
  return (
    <div className="row">
      <a>
        {party.name}
      </a>
    </div>
  )
}
