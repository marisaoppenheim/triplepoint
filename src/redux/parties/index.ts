import { stateContainer } from "../utils";
import { Party } from "../../types/Party"

export type WrappedPartyState = stateContainer<{ [key: string]: Party }>;
