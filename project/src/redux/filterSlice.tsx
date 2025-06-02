import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  levels: string[];
  roles: string[];
}

const initialState: FilterState = {
  levels: [],
  roles: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleLevel(state, action: PayloadAction<string>) {
      if (state.levels.includes(action.payload)) {
        state.levels = state.levels.filter((l) => l !== action.payload);
      } else {
        state.levels.push(action.payload);
      }
    },
    toggleRole(state, action: PayloadAction<string>) {
      if (state.roles.includes(action.payload)) {
        state.roles = state.roles.filter((r) => r !== action.payload);
      } else {
        state.roles.push(action.payload);
      }
    },
    clearFilters(state) {
      state.levels = [];
      state.roles = [];
    },
  },
});

export const { toggleLevel, toggleRole, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
