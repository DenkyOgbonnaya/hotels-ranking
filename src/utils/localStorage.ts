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
