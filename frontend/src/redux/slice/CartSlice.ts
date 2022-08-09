import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ICartItem, TCartSlice} from "../../types/CartSlice/cart-type";

const initialState: TCartSlice = {
  items: [],
  totalPrice: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      findItem
        ? findItem.count++
        : state.items.push({
            ...action.payload,
            count: 1,
          });
      state.totalPrice = state.items.reduce((acc, item) => {
        const price = (item.price).toString().replace(/,/g,'')
        return Number(price) * item.count + acc}, 0)
    },
    deleteCartItems(state, action:PayloadAction<ICartItem>) {
      const findItem = state.items.find((item) => item.id === action.payload.id)
      if (findItem) {
        const price = (findItem.price).toString().replaceAll(',','')
        state.totalPrice -= Number(price) * findItem.count
      }
      state.items = state.items.filter(item =>
        item.name !== action.payload.name
      )
    }
  },
});

export const selectCartItem = (state: RootState) => state.cart;

export const { addCartItem, deleteCartItems } = CartSlice.actions;

export default CartSlice.reducer;