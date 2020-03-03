import Deal from "./Deal"
import Bid from "./Bid"

export interface Party {
  id: string;
  name: string;
  deals: Deal[];
  bids: Bid[]
  city: string;
  state: string;
  img: string;
  aum: number;
  ceo: string;
  industry: string;
}
