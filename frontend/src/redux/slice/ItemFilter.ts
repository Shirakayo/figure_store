import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

const initialState = {
    category: 0,
    search: '',
    sort: {
        name: 'Price',
        sortType: 'price',
        order: 'desc'
    },
    pageCount: 1,
    limitPage: 4
}


export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
    },
    selectSearch(state, action) {
      state.search = action.payload;
    },
    selectSort(state, action) {
      state.sort = action.payload;
    },
    selectPageCount(state, action) {
      state.pageCount = action.payload;
    },
    selectLimitPage(state, action) {
      state.limitPage = action.payload;
    },
  },
});


export const selectFilter = (state: RootState) => state.filter;
export const selectSortProperty = (state: RootState) => state.filter.sort;


export const { selectCategory, selectPageCount, selectSearch, selectLimitPage, selectSort } =
    filterSlice.actions;

export default filterSlice.reducer;