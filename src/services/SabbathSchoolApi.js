import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sabbath-school-stage.adventech.io/api/v2/",
  }),
  endpoints: (builder) => ({
    getSSLs: builder.query({
      query: () => "am/quarterlies/index.json",
    }),
    getSSLOfQuarter: builder.query({
      query: (path) => `am/quarterlies/${path}/index.json`,
    }),
    getSSLOfDay: builder.query({
      query: (path, date) => {
        console.log("Path:", path);
        console.log("Day:", date);
        return `am/quarterlies/${path}/lessons/${date}/index.json`;
      },
    }),
  }),
});

export const { useGetSSLsQuery, useGetSSLOfQuarterQuery, useGetSSLOfDayQuery } =
  api;
