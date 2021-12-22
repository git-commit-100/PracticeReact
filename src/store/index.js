import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, visible: false };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //here we can mutate objects directly
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    toggleCounter(state) {
      state.visible = !state.visible;
    },
  },
});

/* can manage multiple reducers here ,just nest extra reducres in an object to reducer key
  eg: reducer: {counter: counterSlice.reducer, otherName: otherReducers,.....} */

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
