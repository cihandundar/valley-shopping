import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storedFavoritesItems = localStorage.getItem("favoritesItems");
const initialState = {
  favoritesItems: storedFavoritesItems ? JSON.parse(storedFavoritesItems) : [],
  FavoriteTotalQuantity: 0,
  selectedItems: [],
};

const favoritesSlice = createSlice({
  name: `favorites`,
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const itemIndex = state.favoritesItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.favoritesItems[itemIndex].cartQuantity += 1;
      } else {
        const tempFavorite = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.favoritesItems.push(tempFavorite);
        toast.success(`${action.payload.title} added`);
      }
      localStorage.setItem(
        "favoritesItems",
        JSON.stringify(state.favoritesItems)
      );
    },
    removed(state, action) {
      const nextfavoritesItems = state.favoritesItems.filter(
        (mmovieItem) => mmovieItem.id !== action.payload.id
      );
      state.favoritesItems = nextfavoritesItems;
      state.selectedItems = state.selectedItems.filter(
        (itemId) => itemId !== action.payload.id
      );
      localStorage.setItem(
        "favoritesItems",
        JSON.stringify(state.favoritesItems)
      );
      toast.info(`${action.payload.title} deleted`);
    },
  },
});

export const { addToFavorites, removed } = favoritesSlice.actions;

export default favoritesSlice.reducer;
