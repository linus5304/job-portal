import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({ breakpoints });

const layouts = {
  L1: DashboardLayout,
  L2: MainLayout,
};
const variants = {
  sm: "small",
  md: "medium",
  rg: "regular",
};

const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.value] || EmptyLayout;
  const variant = variants[Component.variant];
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout variant={variant}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
};

const EmptyLayout = ({ children }) => <>({children})</>;
export default App;
