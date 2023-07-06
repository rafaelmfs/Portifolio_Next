import { create } from "zustand";

interface FiltersState {
  currentFilter: string;
  changeFilter: (filter: string) => void;
}

export const useFilters = create<FiltersState>((set) => ({
  currentFilter: "",
  changeFilter(filter) {
    set({
      currentFilter: filter
    })
  },
}))