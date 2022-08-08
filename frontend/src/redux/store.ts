import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import UserSlice from "./slice/UserSlice";
import itemsSlice from "./slice/ItemsSlice";
import filterSlice from "./slice/ItemFilter";
import CartSlice from "./slice/CartSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        items: itemsSlice,
        filter: filterSlice,
        cart: CartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch