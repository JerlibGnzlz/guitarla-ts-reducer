import { Guitar } from "../types";


export type CarArctions =
  { type: "add-to-Cart", payload: { item: Guitar } } |
  { type: "remove-cart", payload: { id: Guitar["id"] } } |
  { type: "decrease-quantity", payload: { id: Guitar["id"] } } |
  { type: "increase-quantity", payload: { id: Guitar["id"] } } |
  { type: "clear-cart", } 
