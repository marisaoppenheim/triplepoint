import { stateContainer } from "../utils";
import Bid from "../../types/Bid"

export type WrappedBidState = stateContainer<{ [key: string]: Bid }>;
