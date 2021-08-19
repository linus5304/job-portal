import React from 'react';
import { Button, Flex, Text, Spacer, Divider } from '@chakra-ui/react';


interface HeroContactProps{

}


export const HeroContact: React.FC<HeroContactProps> = ({}) => {
        return (
            <>
            <Flex bg="#1d292e" h="100%" py="6%">
                <Flex w="60%" m="auto" justifyContent="space-around" flexDir={['column','column','column', 'row', 'row']} alignItems="center" >
                <Flex color="white" flexDir="column" justifyContent="center">
                    <Text fontSize={['2xl', '2xl','4xl','4xl' ]}  fontWeight="bold" textAlign="center">Most comprehensive job portal</Text>
                    <Text fontFamily="2lg" textAlign="center"> We must explain to you how all this mistaken idea of denouncing</Text>
                </Flex>
                <Flex justifyContent="center" mx="auto" gridGap="5%">
                    <Button size="lg">Login</Button>
                    <Button size="lg">Sign Up</Button>
                    
                </Flex>
                
                </Flex>
                
            </Flex>
            
        
            </>
        );
};