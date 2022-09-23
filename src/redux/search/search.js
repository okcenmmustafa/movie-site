import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = search.actions;
export const selectorValue = (state) => state.search.value;
export default search.reducer;
