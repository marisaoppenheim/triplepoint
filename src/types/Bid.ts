export default interface Bid {
  partyId: string;
  dealId: string;
  offerPrice: number;
  status: BidStatus;
  id: string;
}

export enum BidStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING"
}
