import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICountry } from "@/types/country.type";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pkgstore.datahub.io" }),
  tagTypes: ["countries"],
  endpoints: (builder) => ({
    getCountries: builder.query<ICountry[], null>({
      query: () => {
        return `/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`;
      },
      providesTags: ["countries"],
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
