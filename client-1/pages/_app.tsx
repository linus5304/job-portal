import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools'
import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { DashboardLayout } from './../components/layouts/DashboardLayout';

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  })

  const theme = extendTheme({breakpoints})

const layouts = {
    L1: DashboardLayout,
    L2: MainLayout
}
const variants = {
    sm: 'small',
    md: 'medium',
    rg:'regular'

}

 const App = ({Component, pageProps}) => {
     const Layout = layouts[Component.value] || EmptyLayout
     const variant = variants[Component.variant]
        return (

            <ChakraProvider theme={theme}>
                <Layout variant={variant}>
                <Component {...pageProps}/>
                </Layout>
            </ChakraProvider>
            
        );
};

const EmptyLayout = ({children}) => <>({children})</>
export default App