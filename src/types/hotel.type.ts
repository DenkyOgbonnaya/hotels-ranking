// types definition for the hotel entity

export interface IHotelCreateInput {
  name: string;
  country: string;
  address: string;
  category: string;
}

export interface IHotel extends IHotelCreateInput {
  _id: string;
}

export type SortOrder = "Ascending" | "Descending";
