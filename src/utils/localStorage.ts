import { defaultCategories } from "@/constants/app.constant";
import { ICategory } from "@/types/category.type";
import { IHotel } from "@/types/hotel.type";

// save hotels to local storage to  persist accross sessions
export const setHotels = (hotels: IHotel[]) => {
  localStorage.hotels = JSON.stringify(hotels);
};

// get persisted hotels from local storage
export const getHotels = (): IHotel[] => {
  // save check for server side rendereing
  if (typeof window != "undefined") {
    const hotelsJson = localStorage.hotels;

    // if no hotels has been persisted return an empty array
    return hotelsJson ? JSON.parse(hotelsJson) : [];
  }

  return [];
};

// save categories to local storage to  persist accross sessions
export const setCategories = (categories: ICategory[]) => {
  localStorage.categories = JSON.stringify(categories);
};

// get persisted categories from local storage
export const getCategories = (): ICategory[] => {
  // save check for server side rendereing
  if (typeof window != "undefined") {
    const categoriesJson = localStorage.categories;

    // if no categories has been persisted return an default categories
    return categoriesJson ? JSON.parse(categoriesJson) : defaultCategories;
  }

  return [];
};

// delete categories
export const clearCategories = () => {
  localStorage.removeItem("categories");
};
