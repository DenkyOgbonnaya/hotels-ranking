import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  clearCategories,
  getCategories,
  setCategories,
} from "@/utils/localStorage";
import { ICategory, ICategoryCreate } from "@/types/category.type";

interface CategoryState {
  categories: ICategory[];
  category: ICategory | null;
}
// get saved categories from local stroage
const categories = getCategories();

const initialState: CategoryState = {
  categories,
  category: null, // holds reference to a single category
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategoryCreate>) => {
      // generate a new unique id
      const id = new Date().toISOString();

      const newCategory: ICategory = {
        _id: id,
        ...action.payload,
      };

      state.categories = state.categories.concat(newCategory);

      // save updated categories list to local storage
      setCategories(state.categories.concat(newCategory));
    },
    removeCategory: (state, action: PayloadAction<ICategory["_id"]>) => {
      const filteredCategories = state.categories.filter(
        (item) => item._id != action.payload
      );
      state.categories = filteredCategories;
      state.category = null;

      // update local storage

      // remove categories from local storage
      // if there are no items,
      // this enables the defualt items to load
      if (filteredCategories.length < 1) {
        clearCategories();
      } else {
        setCategories(filteredCategories);
      }
    },
    updateCategory: (
      state,
      action: PayloadAction<{ _id: string; newRecord: ICategoryCreate }>
    ) => {
      const { _id, newRecord } = action.payload;
      const updatedCategories = state.categories.map((category) =>
        category._id === _id ? { ...category, ...newRecord } : category
      );
      state.categories = updatedCategories;

      // update local storage as well
      setCategories(updatedCategories);
    },

    // set a single category
    setCategory: (state, action: PayloadAction<ICategory | null>) => {
      state.category = action.payload;
    },
  },
});

export const { addCategory, removeCategory, updateCategory, setCategory } =
  categorySlice.actions;

export const selectCategory = (state: RootState) => state.categories;

export default categorySlice.reducer;
