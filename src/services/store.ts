import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modals/modals-slice";

const store = configureStore({
  reducer: {
    modals: modalsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
