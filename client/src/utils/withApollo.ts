import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedJobs } from "../generated/graphql";
import { createWithApollo } from "./createWithApollo";
import { createUploadLink } from "apollo-upload-client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getJobs: {
          keyArgs: false,
          merge(
            existing: PaginatedJobs | undefined,
            incoming: PaginatedJobs
          ): PaginatedJobs {
            console.log(existing, incoming);
            return {
              ...incoming,
              jobs: [...(existing?.jobs || []), ...incoming.jobs],
            };
          },
        },
        searchJobs: {
          keyArgs: ["title", "location"],
          // merge(
          //   existing: PaginatedJobs | undefined,
          //   incoming: PaginatedJobs
          // ): PaginatedJobs {
          //   console.log(existing, incoming);
          //   return {
          //     ...incoming,
          //     jobs: [...(existing?.jobs || []), ...incoming.jobs],
          //   };
          // },
        },

        getAllEducation: {
          keyArgs: [],
        },
      },
    },
  },
});
const link = createUploadLink({
  uri: "http://localhost:4000/graphql",
  headers: {
    "keep-alive": "true",
  },
  credentials: "include",
});
// const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
//   return fetch(url, {
//     ...init,
//     headers: {
//       ...init.headers,
//       'Access-Control-Allow-Origin':'*',
//       Cookie: headers.
//     }
//   })
// }
const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: cache,
  link,
  credentials: "include",
});

export const withApollo = createWithApollo(client);
