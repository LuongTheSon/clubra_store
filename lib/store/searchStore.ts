import { create } from "zustand";

interface SearchStore {
  search: string;
  showSearch: boolean;
  setSearch: (search: string) => void;
  setShowSearch: (showSearch: boolean) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  showSearch: false,
  setSearch: (search) => set({ search }),
  setShowSearch: (showSearch) => set({ showSearch }),
}));
