import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {IAsyncProps, Status} from "../../types/ItemsSlice/items-types";
import axios from "axios";
import { API_URL } from "../../utils/const";
import { RootState } from "../store";
import {IItemInfo} from "../../types/StoreItem/store-item-type";

const initialState = {
  items: [],
  status: Status.LOADING,
  asideItems: [
    {
      image: "https://img.amiami.com/images/genre/icon/1000.png",
      title: "Figures",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/2000.png",
      title: "Toys Categories",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/3000.png",
      title: "Scale Models",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/4000.png",
      title: "Character Goods",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/6000.png",
      title: "Video & Music",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/7000.png",
      title: "Trading Cards",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/8000.png",
      title: "Toys & Goods",
    },
    {
      image: "https://img.amiami.com/images/genre/icon/9000.png",
      title: "Age Restricted Products",
    },
  ],
  newsItems: [
    {
      id: 1,
      title:
        "Shipping method suspension and resumption updates (Updated Jul 29, 2022)",
      important: true,
    },
    {
      id: 2,
      title:
        "Revised Shipping fees for Japan Post, June 2022 (Updated Jun 2, 2022)",
      important: true,
    },
    {
      id: 3,
      title: "COVID-19 shipping restrictions (Updated Mar 10, 2022)",
      important: false,
    },
  ],
};

export const fetchItems = createAsyncThunk<IItemInfo[], IAsyncProps>(
  "items/fetchItems",
  async (params) => {
    const {search, category} = params;
    const response = await axios.get<IItemInfo[]>(API_URL, {
      params: {
        q: search.length === 0 ? null : search,
        category: category === 0 ? null : category
      },
    });
    return response.data;
  }
);

export const addItems = createAsyncThunk<{}, IItemInfo>(
    "items/addItems",
    async (item) => {
      const response = await axios.post(API_URL, {...item}, {}
      );
      return response.data;
    }
);

export const deleteItems = createAsyncThunk('items/deleteItems', async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`)
  console.log(response)
})

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action: { payload: any }) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(addItems.fulfilled, (state, action: { payload: any }) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(addItems.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
export const selectItems = (state: RootState) => state.items;

export default itemSlice.reducer;