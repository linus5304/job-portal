import React from 'react';
import { chakra } from '@chakra-ui/react';
import NextImage  from 'next/image';


export const Image: React.FC<{}>  = chakra(NextImage, {
    shouldForwardProp:(prop) => ['width', 'height','src', 'alt','quality', 'layout'].includes(prop)
})
