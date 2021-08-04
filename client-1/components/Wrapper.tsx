import React from 'react';
import { Box } from '@chakra-ui/react';

export type wrapperVariant = 'regular' | 'medium' | 'small'

interface WrapperProps{
        variant?: wrapperVariant
}


export const Wrapper: React.FC<WrapperProps> = ({children, variant="regular"}) => {
        let maxWidth;
        if(variant === 'regular'){
                maxWidth = '1500px'
        }else if( variant === 'medium'){
                maxWidth = '600px'
        }else{
                maxWidth = '450px'
        }
        return (
            <Box
                maxW={maxWidth}
                w="100%"
                
                alignItems="center"
                justifyContent="center"
                mx="auto"
            >
                    {children}
            </Box>
        );
};