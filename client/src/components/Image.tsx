import React from 'react';
import { Image } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

interface ImageProps{

}


export const ImageComponent: React.FC<ImageProps> = ({}) => {
        return (
            <Flex >
                            <Image borderRadius="4%" objectFit="cover" w="150px" h="200px" src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg"/>

            </Flex>
        );
};