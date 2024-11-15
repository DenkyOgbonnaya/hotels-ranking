import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IHotel, IHotelCreateInput } from "@/types/hotel.type";
import { getHotels, setHotels } from "@/utils/localStorage";

interface HotelState {
  hotels: IHotel[];
}
// get saved hotels from local stroage
const hotels = getHotels();

const initialState: HotelState = {
  hotels,
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    addHotel: (state, action: PayloadAction<IHotelCreateInput>) => {
      // generate a new unique id
      const id = new Date().getTime();

      const newHotel: IHotel = {
        _id: id.toString(),
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
  },
});

export const { addHotel, removeHotel, updateHotel } = hotelSlice.actions;

export const selectHotel = (state: RootState) => state.hotels;

export default hotelSlice.reducer;
