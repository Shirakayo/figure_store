import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";
import {
  AuthResponse,
  PropsDataType, Roles, Status,
} from "../../types/UserSlice/user-interface";
import { RootState } from "../store";
import axios from "axios";
import { API_URL } from "../../http";

const initialState = {
  user: {} as IUser,
  isAuth: false,
  status: Status.LOADING,
  role: Roles.USER
};

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async function (data: PropsDataType) {
      const { email, password } = data;
      const response = await AuthService.login(email, password);
      console.log(response)
      localStorage.setItem("token", response.data.token);
      return response.data.user;
  }
);

export const fetchRegistration = createAsyncThunk(
  "user/fetchRegistration",
  async function (params: PropsDataType) {
    try {
      const { email, password } = params;
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.token);
      return response.data.user;
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  }
);

export const fetchLogout = createAsyncThunk("user/fetchLogout", async () => {
  try {
    await AuthService.logout();
    localStorage.removeItem("token");
    return {} as IUser;
  } catch (error: any) {
    console.log(error?.response?.data?.message);
  }
});

export const checkAuth = createAsyncThunk("user/checkAuth", async () => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error: any) {
    console.log(error.response?.data?.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.role = Roles.USER
      state.user = {} as IUser
    },
    loginSuccess(state) {
      state.status = Status.LOADING
    },
    authService(state) {
      state.isAuth = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRegistration.fulfilled,
      (state, action: { payload: any }) => {
        state.isAuth = true;
        state.user = action.payload;
      }
    );
    builder.addCase(fetchLogin.fulfilled, (state, action: { payload: any }) => {
      state.isAuth = true;
      state.role = action.payload.roles[0].value
      state.user = action.payload
      state.status = Status.SUCCESS
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isAuth = false;
      state.user = {} as IUser
      state.status = Status.ERROR
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.status = Status.PENDING
    });
    builder.addCase(fetchLogout.fulfilled, (state, action: { payload: any }) => {
        state.isAuth = false;
        state.user = action.payload;
      }
    );
    builder.addCase(checkAuth.pending, (state, action: { payload: any }) => {
      state.status = Status.LOADING;
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(checkAuth.fulfilled, (state, action: { payload: any }) => {
      state.status = Status.SUCCESS;
      state.isAuth = true;
      state.user = action.payload;
    });

  },
});

export const selectUser = (state: RootState) => state.user;
export const selectStatus = (state: RootState) => state.user.status;

export const {logout, loginSuccess, authService} = userSlice.actions
export default userSlice.reducer;
