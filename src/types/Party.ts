import Deal from "./Deal"
import Bid from "./Bid"

export interface Party {
  id: string;
  name: string;
  deals: Deal[];
  bids: Bid[]
}
