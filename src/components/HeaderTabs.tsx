import React from "react"

export function HeaderTabs() {
  return (
    <div className="paddingRight">
      <a href="/allParties" className={window.location.pathname === "/allParties" ? "underline" : "aNoStyle"}>
        All Parties
</a>
      <a href="/deals" className={window.location.pathname === "/deals" ? "underline" : "aNoStyle"} >
        Open Deals
      <img />
      </a>
      <a href="/bids" className={window.location.pathname === "/bids" ? "underline" : "aNoStyle"}>
        Current Bids
</a>
    </div>
  )
}
