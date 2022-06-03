import { configureStore } from "@reduxjs/toolkit";
import addNeural from  '../reducers/addNeural';

export const store = configureStore({
    reducer: {
        neural: addNeural,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch