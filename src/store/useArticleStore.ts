import { create } from "zustand";

interface ArticleState {
  searchQuery: string;
  selectedCategory: string | null;
  selectedTags: string[];
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const useArticleStore = create<ArticleState>((set) => ({
  searchQuery: "",
  selectedCategory: null,
  selectedTags: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  toggleTag: (tag) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tag)
        ? state.selectedTags.filter((t) => t !== tag)
        : [...state.selectedTags, tag],
    })),
  clearFilters: () => set({ searchQuery: "", selectedCategory: null, selectedTags: [] }),
}));
