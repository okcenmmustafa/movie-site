import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "redux/search/search";

export const store = configureStore({
  reducer: { search: searchReducer },
});
