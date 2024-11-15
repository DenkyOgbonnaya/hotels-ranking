import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IHotel, IHotelCreateInput, SortOrder } from "@/types/hotel.type";
import { getHotels, setHotels } from "@/utils/localStorage";

interface HotelState {
  hotels: IHotel[];
  hotel: IHotel | null;
}
// get saved hotels from local stroage
const hotels = getHotels();

const initialState: HotelState = {
  hotels,
  hotel: null, // holds reference to a single hotel
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    addHotel: (state, action: PayloadAction<IHotelCreateInput>) => {
      // generate a new unique id
      const id = new Date().toISOString();

      const newHotel: IHotel = {
        _id: id,
        ...action.payload,
      };

      state.hotels = state.hotels.concat(newHotel);

      // save updated hotel list to local storage
      setHotels(state.hotels.concat(newHotel));
    },
    removeHotel: (state, action: PayloadAction<IHotel["_id"]>) => {
      const filteredHotels = state.hotels.filter(
        (item) => item._id != action.payload
      );
      state.hotels = filteredHotels;
      state.hotel = null;

      // update local storage
      setHotels(filteredHotels);
    },
    updateHotel: (
      state,
      action: PayloadAction<{ _id: string; newRecord: IHotelCreateInput }>
    ) => {
      const { _id, newRecord } = action.payload;
      const updatedHotels = state.hotels.map((hotel) =>
        hotel._id === _id ? { ...hotel, ...newRecord } : hotel
      );
      state.hotels = updatedHotels;

      // update local storage as well
      setHotels(updatedHotels);
    },

    // set a single hotel
    setHotel: (state, action: PayloadAction<IHotel | null>) => {
      state.hotel = action.payload;
    },
    filterByCategories: (
      state,
      action: PayloadAction<{ categories: string[] }>
    ) => {
      // get hotels form local storage
      const hotels = getHotels();

      const filteredHotels = hotels.filter((item) =>
        action.payload.categories.includes(item.category)
      );

      // restore hotels from store if no category selection
      if (action.payload.categories.length < 1) {
        state.hotels = hotels;
      } else {
        state.hotels = filteredHotels;
      }
    },

    sortByName: (
      state,
      action: PayloadAction<{ order: SortOrder | string }>
    ) => {
      // get hotels form local storage
      const hotels = getHotels();

      const sortOrder = action.payload.order;

      let sortedHotels = [];

      if (sortOrder === "Ascending") {
        // sort in ascending order
        sortedHotels = hotels.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        // sort in descending order
        sortedHotels = hotels.sort((a, b) => b.name.localeCompare(a.name));
      }

      state.hotels = sortedHotels;
    },

    searchByName: (state, action: PayloadAction<{ search: string }>) => {
      // get hotels form local storage
      const hotels = getHotels();
      const searchString = action.payload.search;

      const searchResult = hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchString.toLowerCase() || "")
      );

      state.hotels = searchResult;
    },
  },
});

export const {
  addHotel,
  removeHotel,
  updateHotel,
  setHotel,
  filterByCategories,
  sortByName,
  searchByName,
} = hotelSlice.actions;

export const selectHotel = (state: RootState) => state.hotels;

export default hotelSlice.reducer;
