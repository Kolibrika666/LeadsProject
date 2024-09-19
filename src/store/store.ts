import { configureStore } from "@reduxjs/toolkit";
import { leadsReducer } from "../Leads";

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
