import { configureStore } from "@reduxjs/toolkit";
import { DarkmodeSlice } from "../reducers/darkmode";
import { SidebarSlice } from "../reducers/sidebar";
import { sidebarActionsSlice } from "../reducers/sidebarActions";
import { BackdropSlice } from "../reducers/backdrop";



export const store = configureStore({
    reducer: {
        darkmode: DarkmodeSlice.reducer,
        sidebar: SidebarSlice.reducer,
        sidebarActions: sidebarActionsSlice.reducer,
        backdrop: BackdropSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch