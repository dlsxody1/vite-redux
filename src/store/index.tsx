import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conterSlice";

//configureStore의 역할은 여러 개의 slice들을 모아주는 역할

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
