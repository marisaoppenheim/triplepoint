import React from "react"


export function Header() {
  console.log(window.location.pathname)
  return (
    <div >
      <div className="header">
        <h1 className="center">
          Triple Point Liquidity

  </h1>
      </div>
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
    </div>
  )
}
