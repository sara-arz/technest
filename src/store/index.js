import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer";

// The single source of truth for the whole application
const store = configureStore({ reducer: cartReducer });
export default store;
