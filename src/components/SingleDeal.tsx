import React from "react"
import Deal from "../types/Deal"

interface SingleDealProps {
  deal: Deal
  index: number;
}

export function SingleDeal({ deal, index }: SingleDealProps) {
  const id = deal.id
  return (
    <a href={`/deals/${id}`} className="aNoStyle">
      {`${index + 1}: ${deal.name}`}
    </a>
  )
}
