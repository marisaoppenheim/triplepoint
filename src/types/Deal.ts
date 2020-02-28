import Bid from "./Bid"

export default interface Deal {
  name: string;
  partyId: string;
  assetType: string;
  askingPrice: number;
  bids: Bid[];
  id: string;
}
