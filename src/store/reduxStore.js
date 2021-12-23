import { configureStore, createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
  user: {
    id: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = authInitialState.user;
    },
    setUser(state, action) {
      //onlye setUser after setting auth to true
      const { id, email, password } = action.payload;
      state.user = {
        id,
        email,
        password,
      };
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authSliceActions = authSlice.actions;

export default store;
