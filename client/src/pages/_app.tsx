import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useRouter } from "next/router";
import React, { Component, useState } from "react";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../../styles/nprogress.css";
import { Spinner } from "../components/svg/Spinner";

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

export const config = {
  unstable_runtimeJS: false,
};
const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.value] || EmptyLayout;
  const variant = variants[Component.variant];

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  router.events?.on("routeChangeStart", (url) => {
    console.log("Router is changing");
    NProgress.start();
    setLoading(true);
  });
  router.events?.on("routeChangeComplete", (url) => {
    console.log("Router is changing complete");
    NProgress.done();
    setLoading(false);
  });
  router.events?.on("routeChangeError", (url) => {
    console.log("Router is changing complete");
    NProgress.done();
    setLoading(false);
  });

  return (
    <ChakraProvider theme={theme}>
      {loading ? <Spinner /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
};


const EmptyLayout = ({ children }) => <>({children})</>;
export default App;
