import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import {ICartItem, TCartSlice} from "../../types/CartSlice/cart-type";

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
        (item) => item?.name === action.payload.name
      );
      findItem
        ? findItem.count++
        : state.items.push({
            ...action.payload,
            count: 0,
          });
      state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum
      }, 0)
    },
  },
});

export const selectCartItem = (state: RootState) => state.cart;

export const { addCartItem } = CartSlice.actions;

export default CartSlice.reducer;