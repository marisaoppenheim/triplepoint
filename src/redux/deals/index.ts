import { stateContainer } from "../utils";
import Deal from "../../types/Deal"

export type WrappedDealState = stateContainer<{ [key: string]: Deal }>;
