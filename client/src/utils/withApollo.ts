import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedJobs } from "../generated/graphql";
import { withApollo as createWithApollo } from "next-apollo";
import { createUploadLink } from "apollo-upload-client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getJobs: {
          keyArgs: [],
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
          keyArgs: ['title', 'location'],
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
const client = new ApolloClient({
  cache: cache,
  link,
  credentials: "include",
});

export const withApollo = createWithApollo(client);
