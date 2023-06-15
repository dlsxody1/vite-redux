import { createSlice } from "@reduxjs/toolkit";
import type { InitialState } from "../types/ActionProps";

//createSlice는 객체를 인자로 받고 객체에는 name, initialState, reducers를 필수 요소입니다.

const initialState: InitialState = {
  id: 1,
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrease: (state, action) => {
      state.value = state.value - action.payload;
    },
    init: (state, action) => {
      state.value - action.payload;
    },
  },
});

export default counterSlice;
export const { increase, decrease, init } = counterSlice.actions;
