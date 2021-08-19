import { Box } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Wrapper, wrapperVariant } from '../Wrapper';


interface MainLayoutProps{
    variant?: wrapperVariant
}


export const MainLayout: React.FC<MainLayoutProps> = ({children,variant}) => {
        return (
            //header
            <Box bg="#eaeaea" w="100%" >
                <Navbar/>
                <Wrapper variant={variant}>
                    {children}
                </Wrapper>
                <Footer/>
            </Box>
        );
};