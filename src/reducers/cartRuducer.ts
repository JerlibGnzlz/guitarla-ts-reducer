import { db } from "../data/db";
import { CartItem, Guitar } from "../types";


export type CarArctions =
  { type: "add-to-Cart", payload: { item: Guitar } } |
  { type: "remove-cart", payload: { id: Guitar["id"] } } |
  { type: "decrease-quantity", payload: { id: Guitar["id"] } } |
  { type: "increase-quantity", payload: { id: Guitar["id"] } } |
  { type: "clear-cart", }


export type CartState = {
  data: Guitar[]
  cart: CartItem[]
}

export const initialState: CartState = {
  data: db,
  cart: []
}


export const cartReducer =
  (
    state: CartState = initialState,
    action: CarArctions
  ) => {
    if (action.type === "add-to-Cart") {


      return {
        ...state
      }
    }
    if (action.type === "remove-cart") {


      return {
        ...state
      }
    }
    if (action.type === "decrease-quantity") {


      return {
        ...state
      }
    }
    if (action.type === "increase-quantity") {


      return {
        ...state
      }
    }
    if (action.type === "clear-cart") {


      return {
        ...state
      }
    }
  }