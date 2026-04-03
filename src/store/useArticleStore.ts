import { create } from "zustand";

interface ArticleState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  searchQuery: string;
  selectedCategory: string | null;
  selectedTags: string[];
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category, currentPage: 1 }),
  selectedTags: [],
  toggleTag: (tag) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tag)
        ? state.selectedTags.filter((t) => t !== tag)
        : [...state.selectedTags, tag],
      currentPage: 1,
    })),
  clearFilters: () => set({ searchQuery: "", selectedCategory: null, selectedTags: [], currentPage: 1 }),
}));
