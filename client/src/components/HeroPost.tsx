import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';


interface HeroPostProps{

}


export const HeroPost: React.FC<HeroPostProps> = ({}) => {
        return (
            <Flex h="300px" w="100%" flexDirection="column" bg="#470137" py={4} alignItems="center" justifyContent="center" mx="auto">
                <Stack direction="column" spacing="30px">
                    <Text fontSize={['2xl', '2xl','4xl','6xl' ]} fontWeight="bold" color="white" textAlign="center">Post your Job Today</Text>
                    <Text fontSize={['xl', 'xl','2xl','2xl' ]}  color="white" textAlign="center">Job seekers will be able to find your first-class job</Text>
                    <Button  alignSelf="center" size="lg">Post Job</Button>
                </Stack>
            </Flex>
        );
};